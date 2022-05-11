import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

export enum SFW {

    //SFW
    NEKO =  'neko',
    WAIFU =  'waifu',
    CRY =  'cry',
    HUG =  'hug',
    KISS =  'kiss',
    LICK =  'lick',
    PAT =  'pat',
    SMUG =  'smug',
    BONK =  'bonk',
    BLUSH =  'blush',
    SMILE =  'smile',
    WAVE =  'wave',
    FIVE =  'five',
    BITE =  'bite',
    SLAP =  'slap',
    KICK =  'kick',
    WINK =  'wink',
    POKE =  'poke',
    DANCE =  'dance',
    CRINGE =  'cringe',
    CAT =  'cat',
    POKEMON =  'pokemon',
    SHINOBU =  'shinobu',
    MEGUMIN =  'megumin',
    AQUA =  'aqua',
    HOLO =  'holo'
}

export enum NSFW {
    //NSFW

    FEET =  'feet',
    BLOWJOB =  'blowjob',
    TRAP =  'trap',
    FUCK =  'fuck',
    SOLO =  'solo',
    CUM =  'cum',
    LES =  'les',
    SPANK =  'spank',
    BOOBS =  'boobs',
    SMALLBOOBS =  'smallboobs',
    LEWD =  'lewd',
    ANAL =  'anal',
    FUTA =  'futa',
    HOLONSFW = 'holonsfw'
}

@Entity()
export class Image {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    userId!: string;

    @Column({
        type: 'boolean'
    })
    nsfw!: boolean;

    @Column()
    category!: SFW | NSFW;

    @Column({
        type: 'boolean',
        default: false
    })
    aproved!: boolean;

    @Column()
    link!: string;

}