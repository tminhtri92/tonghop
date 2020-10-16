import React from 'react'
import {
  View, Text, TouchableOpacity, Image, Dimensions, TextInput, ScrollView, Modal,
} from 'react-native'
import {
  back, refresh, male, female, butonBg,
} from './assets/images'

const Fonts = {
  sfProTextRegular: {
    fontFamily: 'SFProText-Regular',
  },
  sfProTextBold: {
    fontFamily: 'SFProText-Bold',
  },
}
const { width } = Dimensions.get('window')
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      heightValue: '170',
      weightValue: '60',
      isModalBmiVisible: false,
      bmiValue: '0',
    }
  }

  handleHeightTextInputChange = (text) => {
    this.setState({
      heightValue: text,
    })
  }

  handleWeightTextInputChange = (text) => {
    this.setState({
      weightValue: text,
    })
  }

  caculateBMI = () => {
    const { weightValue, heightValue } = this.state
    const bmiValue = weightValue / ((heightValue / 100) * (heightValue / 100))
    console.log('================================================')
    console.log('bmiValue', bmiValue)
    console.log('================================================')
    this.setState({ bmiValue: bmiValue.toFixed(1), isModalBmiVisible: true })
  }

  render() {
    return (
      <ScrollView>

        <View style={{
          flex: 1,
          backgroundColor: '#232F3C',
          paddingHorizontal: 30 / 375 * width,
        }}
        >
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 29 / 375 * width,
          }}
          >
            <View>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
              >
                <Image
                  source={back}
                  style={{
                    marginRight: 16 / 375 * width,
                    width: 8 / 375 * width,
                    height: 15 / 375 * width,
                  }}
                  resizeMode="contain"
                />
                <Text style={{
                  ...Fonts.sfProTextRegular,
                  fontSize: 16 / 375 * width,
                  color: '#72909d',
                }}
                >
                  Weight Diary
                </Text>
              </View>
              <Text style={{
                ...Fonts.sfProTextRegular,
                fontSize: 28 / 375 * width,
                color: '#e0f2f1',
                marginTop: 15 / 375 * width,
              }}
              >
                BMI Calculator
              </Text>
            </View>
            <TouchableOpacity>
              <Image
                source={refresh}
                style={{ width: 48 / 375 * width, height: 48 / 375 * width }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          <View style={{
            marginTop: 29 / 375 * width,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
          >
            <View style={{
              width: 144 / 375 * width,
              height: 144 / 375 * width,
              borderRadius: 10 / 375 * width,
              alignItems: 'center',
              backgroundColor: 'rgba(114, 144, 157, 0.09)',
              justifyContent: 'center',
            }}
            >
              <Image
                source={male}
                style={{ width: 38 / 375 * width, height: 37 / 375 * width, marginBottom: 16 / 375 * width }}
              />
              <Text style={{
                color: '#72909D',
                ...Fonts.sfProTextRegular,
                fontSize: 18 / 375 * width,
              }}
              >
                Male
              </Text>
            </View>
            <View style={{
              width: 144 / 375 * width,
              height: 144 / 375 * width,
              borderRadius: 10 / 375 * width,
              alignItems: 'center',
              backgroundColor: 'rgba(114, 144, 157, 1)',
              justifyContent: 'center',
            }}
            >
              <Image
                source={female}
                style={{
                  width: 38 / 375 * width,
                  height: 37 / 375 * width,
                  marginBottom: 16 / 375 * width,
                }}
              />
              <Text style={{
                color: '#ffffff',
                ...Fonts.sfProTextRegular,
                fontSize: 18 / 375 * width,
              }}
              >
                Male
              </Text>
            </View>
          </View>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 32 / 375 * width,
          }}
          >
            <View style={{
              flexDirection: 'row',
              width: 144 / 375 * width,
              justifyContent: 'center',
            }}
            >
              <Text style={{
                ...Fonts.sfProTextBold,
                fontSize: 14 / 375 * width,
                color: '#e0f2f1',
                marginRight: 8 / 375 * width,
              }}
              >
                cm
              </Text>
              <Text style={{
                ...Fonts.sfProTextRegular,
                fontSize: 14 / 375 * width,
                color: '#72909D',
              }}
              >
                ft
              </Text>
            </View>
            <View style={{
              width: 144 / 375 * width,
              height: 72 / 375 * width,
              borderRadius: 36 / 375 * width,
              backgroundColor: '#2F3F4B',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            >
              <TextInput
                value={this.state.heightValue}
                onChangeText={this.handleHeightTextInputChange}
                style={{
                  color: '#72909D',
                  ...Fonts.sfProTextBold,
                  fontSize: 36 / 375 * width,
                }}
                placeholder="0"
                placeholderTextColor="#72909D"
                keyboardType="numeric"
              />
            </View>
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 16 / 375 * width,
          }}
          >
            <View style={{
              flexDirection: 'row',
              width: 144 / 375 * width,
              justifyContent: 'center',
            }}
            >
              <Text style={{
                ...Fonts.sfProTextBold,
                fontSize: 14 / 375 * width,
                color: '#e0f2f1',
                marginRight: 8 / 375 * width,
              }}
              >
                kg
              </Text>
              <Text style={{
                ...Fonts.sfProTextRegular,
                fontSize: 14 / 375 * width,
                color: '#72909D',
              }}
              >
                lb
              </Text>
            </View>
            <View style={{
              width: 144 / 375 * width,
              height: 72 / 375 * width,
              borderRadius: 36 / 375 * width,
              backgroundColor: '#2F3F4B',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            >
              <TextInput
                value={this.state.weightValue}
                onChangeText={this.handleWeightTextInputChange}
                style={{ color: '#72909D', ...Fonts.sfProTextBold, fontSize: 36 / 375 * width }}
                placeholder="0"
                placeholderTextColor="#72909D"
                keyboardType="numeric"
              />
            </View>
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 16 / 375 * width,
          }}
          >
            <View style={{
              flexDirection: 'row',
              width: 144 / 375 * width,
              justifyContent: 'center',
            }}
            >
              <Text style={{
                ...Fonts.sfProTextBold,
                fontSize: 14 / 375 * width,
                color: '#e0f2f1',
                marginRight: 8 / 375 * width,
              }}
              >
                cm
              </Text>
              <Text style={{
                ...Fonts.sfProTextRegular,
                fontSize: 14 / 375 * width,
                color: '#72909D',
              }}
              >
                ft
              </Text>
            </View>
            <View style={{
              width: 144 / 375 * width,
              height: 72 / 375 * width,
              borderRadius: 36 / 375 * width,
              backgroundColor: '#2F3F4B',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            >
              <TextInput
                value={this.state.heightValue}
                onChangeText={this.handleHeightTextInputChange}
                style={{ color: '#72909D', ...Fonts.sfProTextBold, fontSize: 36 }}
                placeholder="0"
                placeholderTextColor="#72909D"
                keyboardType="numeric"
              />
            </View>
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 16 / 375 * width,
          }}
          >
            <View style={{
              flexDirection: 'row',
              width: 144 / 375 * width,
              justifyContent: 'center',
            }}
            >
              <Text style={{
                ...Fonts.sfProTextBold,
                fontSize: 14 / 375 * width,
                color: '#e0f2f1',
                marginRight: 8 / 375 * width,
              }}
              >
                cm
              </Text>
              <Text style={{
                ...Fonts.sfProTextRegular,
                fontSize: 14 / 375 * width,
                color: '#72909D',
              }}
              >
                ft
              </Text>
            </View>
            <View style={{
              width: 144 / 375 * width,
              height: 72 / 375 * width,
              borderRadius: 36 / 375 * width,
              backgroundColor: '#2F3F4B',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            >
              <TextInput
                value={this.state.heightValue}
                onChangeText={this.handleHeightTextInputChange}
                style={{ color: '#72909D', ...Fonts.sfProTextBold, fontSize: 36 / 375 * width }}
                placeholder="0"
                placeholderTextColor="#72909D"
                keyboardType="numeric"
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={this.caculateBMI}
          >
            <View style={{
              width: 312,
              height: 54,
              borderRadius: 27,
              marginVertical: 40,
            }}
            >
              <Image
                source={butonBg}
              />
              <Text style={{
                position: 'absolute',
                top: 17,
                left: 69,
                ...Fonts.sfProTextBold,
                color: '#E0F2F1',
                fontSize: 18,
              }}
              >
                Calculate your BMI
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <Modal
          visible={this.state.isModalBmiVisible}
          animationType="slide"
          transparent
        >
          <View style={{
            flex: 1,
            backgroundColor: 'rgba(36, 50, 61,1)',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: 0.9,
          }}
          >
            <View style={{
              width: 250,
              height: 250,
              borderRadius: 20,
              backgroundColor: '#72909D',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            >
              <Text style={{ ...Fonts.sfProTextBold, fontSize: 36, color: '#fff' }}>Your BMI</Text>
              <Text style={{ ...Fonts.sfProTextBold, fontSize: 72, color: '#fff' }}>{this.state.bmiValue}</Text>
            </View>
          </View>
        </Modal>
      </ScrollView>
    )
  }
}

export default App
