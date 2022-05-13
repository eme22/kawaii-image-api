
// 
// Scripts
// 

var sfw;

fetch('/api/v1/endpoints/sfw')
    .then(res => res.json())
    .then(out => { sfw = out; })
    .catch(err => {
        console.log(err);
    })

var nsfw;

fetch('/api/v1/endpoints/nsfw')
    .then(res => res.json())
    .then(out => { nsfw = out; })
    .catch(err => {
        console.log(err);
    })

window.addEventListener('DOMContentLoaded', _event => {

    if (window.innerWidth < 922) {
        document.body.classList.toggle('sb-sidenav-toggled');
    }

    if (sessionStorage.user) {
        var user = JSON.parse(sessionStorage.user);
        if (user) {
            setlogged(user)
        }
    } else {
        notlogged();
    }


    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

    const menu_action = document.getElementById('usermenu-action');
    if (menu_action) {
        menu_action.addEventListener('click', event => {
            event.preventDefault();
            if (sessionStorage.user) {
                logout()
            } else {
                createLogin()
            }
        })
    }




    for (let index = 0; index < 9; index++) {
        const gallery = document.getElementById('gallery' + index);


        fetch('/api/v1/sfw/waifu')
            .then(result => result.json())
            .then((output) => {
                gallery.setAttribute("src", output.url)
                if (!output.message) {
                    gallery.style.visibility = "visible";
                }
                else {
                    gallery.style.visibility = "hidden";
                }
            }).catch(err => {
                console.log(err);
                gallery.style.visibility = "hidden";
            });


    }

    fetch('/api/v1/user_data')
        .then(res => res.json())
        .then(out => {
            if (!out.message) {
                setlogged(out)
            }
        })
        .catch(() => { notlogged() });


    const uploadL = document.getElementById('uploadLink');
    uploadL.addEventListener('click', () => {
        if (sessionStorage.user)
            createUploadTest();
        else
            new BsDialogs().ok('Error', 'You must be logged to upload files');
    })
});

function notlogged() {
    const sidenavfooter = document.getElementById("username");
    sidenavfooter.innerHTML = "Not Logged";

    const login = document.getElementById('usermenu-action');
    login.innerHTML = "Login or Register";
}

function setlogged(user_data) {

    sessionStorage.setItem('user', JSON.stringify(user_data));

    const login = document.getElementById('usermenu-action');
    login.setAttribute("data-bs-target", "");
    login.innerHTML = "Logout";

    const sidenavfooter = document.getElementById("username");
    sidenavfooter.innerHTML = user_data.name;

    login.addEventListener('click', () => {
        logout();
    });


}

function logout() {

    fetch('/logout')
        .then(() => window.location.reload())

    sessionStorage.removeItem('user')
}

function createLogin() {
    let ret = new BsDialogs().custom(
        '<i class="fa-brands fa-discord"></i> Login or Register with Discord', '',
        [['Cancel', 'btn-secondary', 'abort'], ['Login', 'btn-primary', 'yes']]
    ).then(
        function (value) {
            if (value == 'yes') {
                window.location.href = "/auth/discord";
            }
        },
        function (error) {
            console.log(error)
        }
    );
}

function createUploadTest() {

    var enlist = ''
    for (var i = 0, l = sfw.length; i < l; i++) {
        ;
        enlist += '<option value=\'{"nsfw": false,"category": "' + sfw[i] + '"}\'>SFW - ' + sfw[i] + '</option>';
    }

    for (var i = 0, l = nsfw.length; i < l; i++) {
        enlist += '<option value=\'{"nsfw": true,"category": "' + nsfw[i] + '"}\'>NSFW - ' + nsfw[i] + '</option>';
    }



    let frm = `<form>
    <div class="mb-3">
    <label for="formFileSm" class="form-label">Small file input example</label>
    <input class="form-control form-control-sm"
    data-name="file" id="generatedFile" accept=".gif,.jpg,.jpeg,.png" type="file" multiple required>
</div>
</div>
<select id="generatedEndpoints" data-name="endpoint" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" required>
<option value="" selected disabled>Select Endpoint</option>
`;
    frm += enlist;
    frm += `</select>
  </form>`

    let dlg = new BsDialogs()
    dlg.form('<i class="fa fa-upload"></i> Upload Image', 'Upload', frm)

    async function waitForElement() {
        let ret = await dlg.onsubmit(true);
        if (ret) {
            var data = document.getElementById('generatedFile').files;
            var endpoint = document.getElementById('generatedEndpoints').value;

            var error = false;
            for (let index = 0; index < data.length; index++) {
                var size = parseFloat(data[index].size / 1024 / 1024).toFixed(2);
                if (size > 8) {
                    new BsDialogs().ok('Error', 'File must not exceed 8 MB: '+ data[index].name);
                    error = true;
                }
            }
            if (error) {
                new BsDialogs().ok('Error', 'File must not exceed 8 MB');
            }
            else {
                submitData(data, endpoint, (success, failed) => {
                    if (success) {
                        dlg.close()
                        new BsDialogs().custom('<div id="generatedUploadingHeader">Uploading...</div>', '<div id="generatedUploadingBody">Wait before all the images are uploaded</div>')
                    }
                    else {
                        if (failed.length > 0) {

                            var failedb = 'Some of you files couldnt be uploaded, Files: '

                            for (let index = 0; index < failed.length; index++) {
                                failedb += failed[index] + " ";
                                
                            }

                            new BsDialogs().ok('Error',  failedb);
                        }
                        else {
                            new BsDialogs().ok('Error', 'You must be logged to upload files');
                        }
                        
                    }
                })

            }
        }
        else if (ret === undefined) {
            dlg.close()
        }
        else {
            new BsDialogs().ok('Error', 'WTF');
        }

    }

    waitForElement();

}

function submitData(files, endpoint, callback) {


    if (sessionStorage.user) {
        var user_data = JSON.parse(sessionStorage.user);
        var object_data = JSON.parse(endpoint);

        var failed = new Array();
        //var failed = [];

        let finished = 0;

        for (let index = 0; index < files.length; index++) {
            const file = files[index];

            var fd = new FormData();
            fd.append('data', file)
            fd.append('userId', user_data.id)
            fd.append('category', object_data.category);

            fetch('api/v1/upload', {
                method: 'post',
                body: fd,
            }).then(() => {
                finished++;
                var header = document.getElementById('generatedUploadingHeader')
                var body = document.getElementById('generatedUploadingBody')

                if (header && body) {
                    header.innerHTML = 'Upload Success'+(finished)+'/'+(files.length+1)+'!'
                    body.innerHTML = 'You must wait before an admin can aprove your image'
                }
                else new BsDialogs().custom('<div id="generatedUploadingHeader">Upload Success'+(finished)+'/'+(files.length+1)+'!</div>', '<div id="generatedUploadingBody">You must wait before an admin can aprove your image</div>')
            } ).catch(err => {
                console.log(err);
                failed.push(file.name);
            });
            
        }

        if (failed.length == 0) {
            callback(true);
        } else {
            callback(false, failed);
        }

    } else {
        callback(false)
    }
}