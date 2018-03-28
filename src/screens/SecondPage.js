import React,{Component} from 'react';
import { View, Text, Image, Dimensions, ScrollView, FlatList} from 'react-native';
import { Icon, Title } from 'native-base';

import styled from "styled-components";
var {
    height,
    width
} = Dimensions.get('window');

const Container = styled.View`
flex: 1;
padding-top:30;   
background-color: #ff9238;  
`;
const MessageContentWrapper = styled.View`
background-color:#fff;
marginTop: 30;
height: ${height - 50};
width: ${width};
border-top-left-radius: 25;
border-top-right-radius: 25;
padding-top: 20;
padding-left:15;
padding-right:15;
`;
const HeaderWrap = styled.View`
padding-right:15;
padding-left:15;
flex-direction:row;
justify-content:space-between;
align-items:center;
`;
const Heading = styled.Text`
font-size:30;
`;
const MessageWrapper = styled.View`
    flex-direction:row;
    align-items:center;
    border-bottom-width:1;
    border-color:#999;
    margin-top:15;
    padding-bottom:10;
`;
const ProfileIconWrapperMsg = styled.View`
border-radius:250;
background-color:#fff;
width:${width - (width - 60)};
margin-top:10;
margin-right:10;
justify-content:center;
align-items:center;
`;
const ProfileIcon = styled.Image`
height:50;
width:50;
`;
const MessageTextWrapper = styled.View`
    width:${width - 100 };
`;
const MessageDetail = styled.View`
flex-direction:row;
justify-content:space-between;
`;
const NameMsg = styled.Text`
font-size:20
`;
const Time = styled.Text`

`;
const Message = styled.Text`

`;
const FlatListWrapper = styled.View`
background-color:#fff;
padding-top:20;
padding-bottom:20;
padding-left:15;
padding-right:15;
    border-top-width:1;
    border-color:#999;
`;


const data = [
    {
        imageUrl: "../assets/images/user-logo.png",
        title: "Benny1"
    },
    {
        imageUrl: "../assets/images/user-logo.png",
        title: "Benny2"
    },
    {
        imageUrl: "../assets/images/user-logo.png",
        title: "Benny3"
    },
    {
        imageUrl: "../assets/images/user-logo.png",
        title: "Benny3"
    },
    {
        imageUrl: "../assets/images/user-logo.png",
        title: "Benny3"
    },
    {
        imageUrl: "../assets/images/user-logo.png",
        title: "Benny3"
    },
    {
        imageUrl: "../assets/images/user-logo.png",
        title: "Benny3"
    },
    {
        imageUrl: "../assets/images/user-logo.png",
        title: "Benny3"
    },
    {
        imageUrl: "../assets/images/user-logo.png",
        title: "Benny3"
    },
    {
        imageUrl: "../assets/images/user-logo.png",
        title: "Benny3"
    },
    {
        imageUrl: "../assets/images/user-logo.png",
        title: "Benny3"
    }
];

export default class SecondPage extends Component {
    state = {
            data: data
    }

    render() {
        return (
            <Container>
                <ScrollView>
                    <MessageContentWrapper>
                        <HeaderWrap>
                            <Heading>Messages</Heading>
                            <Heading>Icon</Heading>
                        </HeaderWrap>
                        <MessageWrapper>
                            <ProfileIconWrapperMsg>
                                <ProfileIcon source={require('../assets/images/user-logo.png')} />
                            </ProfileIconWrapperMsg>
                            <MessageTextWrapper>
                                <MessageDetail>
                                    <NameMsg>hiii</NameMsg>                            
                                    <Time>0000</Time>                            
                                </MessageDetail>
                                <Message>
                                    Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem 
                                </Message>
                            </MessageTextWrapper>
                        </MessageWrapper>
                        <MessageWrapper>
                            <ProfileIconWrapperMsg>
                                <ProfileIcon source={require('../assets/images/user-logo.png')} />
                            </ProfileIconWrapperMsg>
                            <MessageTextWrapper>
                                <MessageDetail>
                                    <NameMsg>hiii</NameMsg>
                                    <Time>0000</Time>
                                </MessageDetail>
                                <Message>
                                    Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                                </Message>
                            </MessageTextWrapper>
                        </MessageWrapper>
                        <MessageWrapper>
                            <ProfileIconWrapperMsg>
                                <ProfileIcon source={require('../assets/images/user-logo.png')} />
                            </ProfileIconWrapperMsg>
                            <MessageTextWrapper>
                                <MessageDetail>
                                    <NameMsg>hiii</NameMsg>
                                    <Time>0000</Time>
                                </MessageDetail>
                                <Message>
                                    Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                                </Message>
                            </MessageTextWrapper>
                        </MessageWrapper>
                        <MessageWrapper>
                            <ProfileIconWrapperMsg>
                                <ProfileIcon source={require('../assets/images/user-logo.png')} />
                            </ProfileIconWrapperMsg>
                            <MessageTextWrapper>
                                <MessageDetail>
                                    <NameMsg>hiii</NameMsg>
                                    <Time>0000</Time>
                                </MessageDetail>
                                <Message>
                                    Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                                </Message>
                            </MessageTextWrapper>
                        </MessageWrapper>
                    </MessageContentWrapper>
                </ScrollView>
                <FlatListWrapper>
                    <Heading>Nearby</Heading>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={this.state.data}
                        renderItem={({ item: rowData }) => {
                            return (
                                <View>
                                    <ProfileIconWrapperMsg>
                                        <ProfileIcon source={require('../assets/images/user-logo.png')} />
                                    </ProfileIconWrapperMsg>
                                    <Text style={{alignSelf:'center'}}>Akshay</Text>
                                </View>
                            );
                        }}
                        keyExtractor={(item, index) => index}
                    />
                </FlatListWrapper>
            </Container>
        );
      }
}