import React from "react";
import { View, Text, SafeAreaView, ActivityIndicator} from 'react-native'
import Modal from 'react-native-modalbox'

export default class Activity extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            value: 1
        }
        
    }

    wait(value = 1) {
        if(value == 1) {
            this.setState({show: true, value})
        } else if(value == 2 || value == 3) {
            this.setState({value})
            setTimeout(() => {
                this.setState({show: false})
            }, 500);
        } 
    }


    render() {
        return (
            <Modal style={{
                    backgroundColor: 'transparent',
                    width: 200, 
                    height: 40
                }}

                isOpen={this.state.show}
                position={'center'}
                backdrop={true}
                backdropOpacity={0.2}
                backdropColor={'white'}
                animationDuration={0}
                transparent={true}
                animationType={ 'slide'}
                backdropPressToClose={false}
                swipeToClose={false}
            >
                
                {this.state.value == 1 &&
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <ActivityIndicator size={'large'} color={'red'}/>
                    </View>
                }

                {this.state.value == 2 &&
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "yellow"}}>
                       <Text style={{fontSize: 20, color: 'green'}}>xu ly thanh cong</Text>
                    </View>
                }

                {this.state.value == 3 &&
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "yellow"}}>
                       <Text style={{fontSize: 20, color: 'red'}}>xu ly that bai</Text>
                    </View>
                }
                
            </Modal>
        )
    }

}