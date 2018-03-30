
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    Dimensions,
    Modal,
    TouchableOpacity,
    PanResponder,
    ScrollView
} from 'react-native';
import { Icon } from 'native-base';

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

const HeaderWrap = styled.View`
padding-right:15;
padding-left:15;
flex-direction:row;
justify-content:space-between;
align-items:center;
`;
const HeaderLeft = styled.View`
flex-direction:row;
justify-content:center;
align-items:center;
`;
const ProfileIconWrapper = styled.View`
border-radius:150;
background-color:#fff;
`;
const ProfileIcon = styled.Image`
height:50;
width:50;
`;
const HeaderLeftText = styled.Text`
padding-left:15;
`;
const HeaderRight = styled.View`
`;
const FlatListBox = styled.View`
align-self:center;
width: ${width - 100};
background-color:#ffb44d;
height: ${width - 35};
margin-top: 100;
border-radius: 25;
`;
const FlatListImage = styled.Image`
        height:150;
        width:150;
        position:absolute;
        align-self:center;
        border-radius:75;
`;
const Name = styled.Text`
    margin-top: 55; 
    font-size: 35;
    color:#0c0931;
`;
const From = styled.Text`
line-height: 25;
font-size: 15;
color:rgba(0,0,0,0.8);
`;
const Studied = styled.Text`
         margin-top: 20;
         line-height: 25;
         font-size: 20;
         text-align:center;
         color:#fff;
`;
const PlaceWrapper = styled.View`
        padding-left:15px;
        padding-right: 15px;
        margin-top: 15; 
`;
const SubTitles = styled.Text`
    font-size:18;
    color:#0c0931;
`;
const Places = styled.View` 
            flexDirection:row;
            margin-top: 15;
            justifyContent:space-around;
`;
const PlaceText = styled.Text`
 background-color: #0c0931;
 padding: 6px;
 border-radius: 20;
 color:#fff;
 font-size:12;
`;
const ModalContentWrapper = styled.View`
background-color:#ffb44d;
marginTop: 30;
height: ${height - 50};
width: ${width};
border-top-left-radius: 25;
border-top-right-radius: 25;
padding-top: 20;
`;
const ModalHeader = styled.View`
flex-direction:row;
justify-content:space-around;
align-items:center;
`;
const ModalImageWrapper = styled.View`
height: 150;
width: 150;
border-radius: 75;
`;
const ModalImage = styled.Image`
height: 150;
width: 150;
border-radius: 75;
`;
const ModalTextContent = styled.View`
align-items: center;
;`


//msg
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

const MessageTextWrapper = styled.View`
    width:${width - 100};
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
    }
];

const dataMsg = [
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

const swipeDirections = {
    SWIPE_UP: 'SWIPE_UP',
    SWIPE_DOWN: 'SWIPE_DOWN',
    SWIPE_LEFT: 'SWIPE_LEFT',
    SWIPE_RIGHT: 'SWIPE_RIGHT'
};

function isValidSwipe(velocity, velocityThreshold, directionalOffset, directionalOffsetThreshold) {
    return Math.abs(velocity) > velocityThreshold && Math.abs(directionalOffset) < directionalOffsetThreshold;
}
export default class FirstPage extends Component {
    state = {
        data: data,
        dataMsg: dataMsg,
        profileModalVisible: false,
        messageModalVisible: false,
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    }

    componentWillMount() {

        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => {
                // console.log(gestureState);
                return true;
            },
            onStartShouldSetPanResponderCapture: (evt, gestureState) => {
                // console.log(gestureState);
                return gestureState.dx != 0 && gestureState.dy != 0;
            },
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                // console.log(gestureState);
                return true;
            },
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
                // console.log(gestureState);
                return true;
            },
            onPanResponderGrant: this._handleOnPanResponderGrant.bind(this),
            onPanResponderMove: this._handleOnPanResponderMove.bind(this),
            onPanResponderRelease: this._handlePanResponderRelease.bind(this)
        })

    }

    _handleOnPanResponderGrant() {

    }

    _handleOnPanResponderMove(evt, gestureState) {
        // console.log(gestureState);
        const swipeDirection = this._getSwipeDirection(gestureState);
        this._triggerSwipeHandlers(swipeDirection, gestureState);
    }

    _handlePanResponderRelease(evt, gestureState) {
        // console.log(gestureState);
    }

    componentWillUnmount() {
        // console.log('dashboard-unmount');
    }

    _getSwipeDirection(gestureState) {
        const { SWIPE_LEFT, SWIPE_RIGHT, SWIPE_UP, SWIPE_DOWN } = swipeDirections;
        const { dx, dy } = gestureState;
        if (this._isValidHorizontalSwipe(gestureState)) {
            return (dx > 0)
                ? SWIPE_RIGHT
                : SWIPE_LEFT;
        } else if (this._isValidVerticalSwipe(gestureState)) {
            return (dy > 0)
                ? SWIPE_DOWN
                : SWIPE_UP;
        }
        return null;
    }


    _isValidHorizontalSwipe(gestureState) {
        const { vx, dy } = gestureState;
        const { velocityThreshold, directionalOffsetThreshold } = this.state;
        return isValidSwipe(vx, velocityThreshold, dy, directionalOffsetThreshold);
    }

    _isValidVerticalSwipe(gestureState) {
        const { vy, dx } = gestureState;
        const { velocityThreshold, directionalOffsetThreshold } = this.state;
        return isValidSwipe(vy, velocityThreshold, dx, directionalOffsetThreshold);
    }

    _triggerSwipeHandlers(swipeDirection, gestureState) {
        // const { onSwipe, onSwipeUp, onSwipeDown, onSwipeLeft, onSwipeRight } = this.props;
        const { SWIPE_LEFT, SWIPE_RIGHT, SWIPE_UP, SWIPE_DOWN } = swipeDirections;
        // onSwipe && onSwipe(swipeDirection, gestureState);
        switch (swipeDirection) {
            case SWIPE_LEFT:
                console.log('SWIPE_LEFT');
                // onSwipeLeft && onSwipeLeft(gestureState);
                break;
            case SWIPE_RIGHT:
                console.log('SWIPE_RIGHT');
                // onSwipeRight && onSwipeRight(gestureState);
                break;
            case SWIPE_UP:
                this.setProfileModalVisible(true);
                console.log('SWIPE_UP');
                // onSwipeUp && onSwipeUp(gestureState);
                break;
            case SWIPE_DOWN:
                if (!this.state.messageModalVisible) {
                    this.setProfileModalVisible(false);
                }

                this.setMessageModalVisible(false);
                console.log('SWIPE_DOWN');
                // onSwipeDown && onSwipeDown(gestureState);
                break;
        }
    }

    setProfileModalVisible(visible) {
        this.setState({ profileModalVisible: visible });
    }

    setMessageModalVisible(visible) {
        this.setState({ messageModalVisible: visible });
    }
    render() {
        return (
            <Container>
                <HeaderWrap >
                    <HeaderLeft>
                        <ProfileIconWrapper>
                            <ProfileIcon source={require('../assets/images/user-logo.png')} />
                        </ProfileIconWrapper>
                        <HeaderLeftText>
                            <SubTitles>
                                Nearby
                        </SubTitles>
                        </HeaderLeftText>
                    </HeaderLeft>

                    <HeaderRight>
                        <SubTitles>
                            Icon
                            {/* <Icon name="md-navigate" /> */}
                        </SubTitles>
                    </HeaderRight>
                </HeaderWrap>
                <View >
                    <FlatList
                        {...this._panResponder.panHandlers}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        /* snapToAlignment={'center'} */
                        data={this.state.data}
                        keyExtractor={(item, index) => index}
                        /* pagingEnabled */
                        renderItem={({ item: rowData }) => {
                            return (
                                <View style={{ marginHorizontal: 15 }} elevation={10}> 
                                    <FlatListBox>
                                        <View style={{ alignItems: 'center' }}>
                                            <Name >Victoria Benny</Name>
                                            <From >From Boston, Massachusetts</From>
                                            <Studied>Studied at Boston {'\n'} University and {'\n'} Works at Dunkin Donuts</Studied>
                                        </View>
                                        <PlaceWrapper >
                                            <SubTitles>
                                                <Icon name="md-navigate" />  Places
                                            </SubTitles>
                                            <Places >
                                                <PlaceText>Miami,Florida</PlaceText>
                                                <PlaceText>Boston, Massachusetts</PlaceText>
                                            </Places>
                                        </PlaceWrapper >
                                    </FlatListBox>
                                    <FlatListImage source={require('../assets/images/card-image.jpg')} />
                                </View>
                            );
                        }}
                    />
                    <View style={{ marginTop: 35, alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => {
                            this.setProfileModalVisible(true)
                        }}
                        >
                            <SubTitles>
                                <Icon name="md-text" />
                            </SubTitles>
                        </TouchableOpacity>
                    </View>
                </View>
                <Modal

                    animationType={"fade"}
                    transparent={true}
                    visible={this.state.profileModalVisible}
                    onRequestClose={() => {
                        this.setProfileModalVisible(false)
                    }}
                >

                    <ModalContentWrapper {...this._panResponder.panHandlers}>
                        <ModalHeader>
                            <SubTitles>
                                Icon
                                {/* <Icon name="md-navigate" /> */}
                            </SubTitles>
                            <ModalImageWrapper>
                                <ModalImage source={
                                    require('../assets/images/card-image.jpg')
                                }
                                />
                            </ModalImageWrapper>
                            <View style={{ marginTop: 15, alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => {
                                    this.setMessageModalVisible(true)
                                }}
                                >
                                    <SubTitles>
                                        <Icon name="md-text" />
                                    </SubTitles>
                                </TouchableOpacity>
                            </View>

                        </ModalHeader>
                        <ModalTextContent>
                            <Name >Victoria Benny</Name>
                            <From >From Boston, Massachusetts</From>
                            <Studied>Nearby</Studied>
                        </ModalTextContent>
                        <PlaceWrapper >
                            <SubTitles>
                                <Icon name="md-navigate" />  Places
                                       </SubTitles>
                            <Places >
                                <PlaceText >Miami,Florida</PlaceText>
                                <PlaceText>Boston, Massachusetts</PlaceText>
                            </Places>
                        </PlaceWrapper>
                        <PlaceWrapper >
                            <SubTitles><Icon name="md-navigate" />  Studies</SubTitles>
                            <Places >
                                <PlaceText>Miami,Florida</PlaceText>
                            </Places>
                        </PlaceWrapper>
                    </ModalContentWrapper>

                </Modal>


                <Modal

                    animationType={"fade"}
                    transparent={true}
                    visible={this.state.messageModalVisible}
                    onRequestClose={() => {
                        this.setMessageModalVisible(false)
                    }}
                >

                    <Container  {...this._panResponder.panHandlers}>
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
                                data={this.state.dataMsg}
                                renderItem={({ item: rowData }) => {
                                    return (
                                        <View>
                                            <ProfileIconWrapperMsg>
                                                <ProfileIcon source={require('../assets/images/user-logo.png')} />
                                            </ProfileIconWrapperMsg>
                                            <Text style={{ alignSelf: 'center' }}>Akshay</Text>
                                        </View>
                                    );
                                }}
                                keyExtractor={(item, index) => index}
                            />
                        </FlatListWrapper>
                    </Container>

                </Modal>
            </Container>
        );
    }
}

const styles = StyleSheet.create({

});