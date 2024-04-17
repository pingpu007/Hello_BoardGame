import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'

import styles from './index.style'
import { CardGameBanner, ContentWrapper, AvatarWithRaise } from '../../components/common'

const BoardGameList = () => {
    const sliceBoardGameList = (array) => {
        const result = []
        for (let i = 0; i < array.length; i += 9) {
            result.push(array.slice(i, i + 9))
        }
        return result
    }

    return (
        <View View style={styles.contentCenterGame} >
            <Swiper showsButtons={false} loop={false} height={'100%'}>
                {sliceBoardGameList(mockupGames).map((array, arrayIndex) => (
                    <View key={arrayIndex} style={styles.containerInner}>
                        {array.map((item, index) => (
                            <CardGameBanner
                                key={index}
                                title={item.title}
                                bannerUrl={item.bannerUrl}
                            />
                        ))}
                    </View>
                ))}
            </Swiper>
        </View>
    )
}

const UserRaiseList = () => {
    const sliceUserList = (array) => {
        const result = []
        for (let i = 0; i < array.length; i += 5) {
            result.push(array.slice(i, i + 5))
        }
        return result
    }

    return (
        <View style={styles.contentCenterUser}>
            <ContentWrapper>
                <Text>ผู้เข้าร่วมโหวต</Text>
            </ContentWrapper>
            <Swiper showsButtons={false} loop={false} height={'100%'}>
                {sliceUserList(mockupUser).map((array, arrayIndex) => (
                    <View key={arrayIndex} style={styles.containerInner}>
                        {array.map((user, index) => (
                            <AvatarWithRaise
                                key={index}
                                imageUrl={user.imageUrl}
                                name={user.name}
                                active={user.active}
                            />
                        ))}
                    </View>
                ))}
            </Swiper>
        </View>
    )
}

const InvitePage = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <ContentWrapper>
                    <View style={styles.textHeader}>
                        <Text>00:00</Text>
                        <Text>เปิดโหวตจาก: EXAMPLE</Text>
                    </View>
                </ContentWrapper>
                <BoardGameList />
                <UserRaiseList />
                <TouchableOpacity style={styles.callBtn}>
                    <Text style={styles.callBtnText}>CALL</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default InvitePage

// Mockup

const mockupGames = [
    {
        title: 'Davinci Code',
        bannerUrl: 'https://down-th.img.susercontent.com/file/th-11134207-7r98o-ltgycft9ceh45f',
    },
    {
        title: 'Dixit',
        bannerUrl: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//100/MTA-11851678/libellud_libellud_full01.jpg',
    },
    {
        title: 'Guess Who?',
        bannerUrl: 'https://dmzn2b8hkpq8b.cloudfront.net/images/products/515x515/S304910_4.jpg',
    },
    {
        title: 'Monopoly',
        bannerUrl: 'https://images.food52.com/mKiA11xuzgiQs_SqVz399FcjFyI=/c23cbf90-961b-4826-b40b-99ae59a4ccb6--2022-0908_ws-game-company_monopoly-heirloom-wooden-board-game_silo_ty-mecham_1_copy.jpg',
    },
    {
        title: 'Jumanji',
        bannerUrl: 'https://i5.walmartimages.com/seo/Jumanji-The-Game-Real-Wooden-Box-Edition-of-the-Classic-Adventure-Board-Game-for-Kids-and-Families-Ages-8-and-up_781f678d-1c40-407f-b85c-ec6c47429ea1.950ab167bb4c53ae2bca7dd8b0fd1b4a.jpeg',
    },
    {
        title: 'Ludo',
        bannerUrl: 'https://i.ebayimg.com/images/g/0KwAAOSwhIRkSR41/s-l1200.webp',
    },
    {
        title: 'Uno',
        bannerUrl: 'https://images-cdn.ubuy.co.in/63c4750b022e8647770366e5-uno-flip-family-card-game-with-112.jpg',
    },
    {
        title: 'Uno Flip',
        bannerUrl: 'https://www.asiabooks.com/media/catalog/product/cache/a5ac216be58c0cbce1cb04612ece96dc/0/8/0887961751062.jpg',
    },
    {
        title: 'CS File',
        bannerUrl: 'https://www.goldengoblingames.com/media/catalog/product/cache/aa7cc00f38a4dfacb2f300ebb9e276ed/g/f/gfx-96761-th.jpg',
    },
    {
        title: 'WTK',
        bannerUrl: 'https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2020/12/The-Stronghold-SIAM-WTK-Board-Game-1.jpg',
    },
    {
        title: 'เหมียวระเบิด',
        bannerUrl: 'https://siamboardgames.com/wp-content/uploads/2023/07/Exploding-Kitten-min.png',
    },
]

const mockupUser = [
    {
        name: 'john doe 1',
        active: false,
    },
    {
        name: 'john doe 2',
        active: true,
    },
    {
        name: 'john doe 3',
        active: true,
    },
    {
        name: 'john doe 4',
        active: true,
    },
    {
        name: 'john doe 5',
        active: false,
    },
    {
        name: 'john doe 6',
        active: false,
    },
    {
        name: 'john doe 7',
        active: true,
    },
    {
        name: 'john doe 8',
        active: false,
    },
]