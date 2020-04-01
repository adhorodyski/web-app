import { AccountsEnum } from '@src/app/core/models/accounts.enum';
import { ProvidersEnum } from '@src/app/core/models/providers.enum';
import { IUser } from '@src/app/core/models/user.model';

export const mockedUser: IUser = {
    accountType: AccountsEnum.CREATOR,
    username: 'm_brownlee',
    name: 'MKBHD',
    email: 'mbrown@mail.com',
    avatar: 'https://pbs.twimg.com/profile_images/1212149592403382281/cI0-xyss_400x400.jpg',
    about: 'I promise I wont overdo the filters.',
    tags: ['music', 'technology'],
    providers: [
        {
            name: ProvidersEnum.YOUTUBE,
            details: [
                {
                    username: 'MKBHD',
                    avatar: 'https://pbs.twimg.com/profile_images/1212149592403382281/cI0-xyss_400x400.jpg',
                },
            ],
        },
        {
            name: ProvidersEnum.INSTAGRAM,
            details: [
                {
                    username: 'marcus_brownlee',
                    avatar: 'https://reidrealtors.com/wp-content/uploads/2017/12/pic-bio-melvin26-500x480-c-center.jpg',
                },
                {
                    username: 'mkbhd',
                    avatar: 'https://pbs.twimg.com/profile_images/1212149592403382281/cI0-xyss_400x400.jpg',
                },
            ],
        },
    ],
    followers: [],
    follows: [],
};
