import { StackScreenProps } from '@react-navigation/stack';

//--- Root Stack Params
export type RootStackParamList = {
    HomePage: undefined;
    DetailPage: {
        notificationId: string;
        item: any;
    };
    AnotherPage: undefined;
};

//-- Props
export type HomePageProps = StackScreenProps<RootStackParamList, 'HomePage'>;
export type DetailPageProps = StackScreenProps<RootStackParamList, 'DetailPage'>;
export type AnotherPageProps = StackScreenProps<RootStackParamList, 'AnotherPage'>;