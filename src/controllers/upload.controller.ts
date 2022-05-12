import { IUploadPayload, uploadfile } from "../repositories/upload.repository";
import { Body } from "tsoa";

//@Route("upload")
//@Tags("Upload")
export default class UploadController {

    //@Post("/")
    uploadFile(@Body() body: IUploadPayload, buffer: Buffer, fileName: string) {
        return uploadfile(body, buffer, fileName)
    }


}