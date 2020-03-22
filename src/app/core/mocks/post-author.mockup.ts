import { IPostAuthor } from '@src/app/core/models/post-author.model';
import { ProvidersEnum } from '@src/app/core/models/providers.enum';

export const mockedPostAuthor: IPostAuthor = {
    creator: true,
    username: 'thefutur',
    name: 'Chris Do',
    email: 'cdo@mail.com',
    avatar: 'https://bit.ly/2UEcbFh',
    about:
        'Teach creatives how to make money doing what they love. Impact 1 Billion lives. Entrepreneur, Educator, Agitator.',
    providers: [
        {
            provider: ProvidersEnum.INSTAGRAM,
            streams: [
                {
                    username: 'thefutur',
                    avatar: 'https://bit.ly/3bf1qj7',
                },
            ],
        },
        {
            provider: ProvidersEnum.TWITTER,
            streams: [
                {
                    username: 'futur',
                    avatar: 'https://bit.ly/394qU17',
                },
            ],
        },
    ],
    followers: [],
    follows: [],
};
