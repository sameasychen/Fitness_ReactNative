import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { getMetricMetaInfo, timeToString } from '../utils/helpers'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import UdaciSlider from './UdaciSlider'
import UdaciSteppers from './UdaciSteppers'
import DateHeader from './DateHeader'

function SubmitBtn({ onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <Text>Submit</Text>
        </TouchableOpacity>
    )
}

export default class addEntry extends Component {
    state = {
        run: 10,
        bike: 1110,
        swim: 10,
        sleep: 0,
        eat: 10,

    }

    increment = (metric) => {
        const { max, step } = getMetricMetaInfo(metric)

        this.setState((state) => {
            const count = state[metric] + step

            return {
                ...state,
                [metric]: count > max ? max : count,
            }
        })
    }

    decrement = (metric) => {

        this.setState((state) => {
            const count = state[metric] - getMetricMetaInfo(metric).step

            return {
                ...state,
                [metric]: count < 0 ? 0 : count
            }
        })
    }

    slide = (metric, value) => {
        this.setState(() => ({
            [metric]: value,
        }))
    }

    submit = () => {
        const key = timeToString()
        const entry = this.state


        //Update Redux

        this.setState(() => ({
            run: 0,
            bike: 0,
            swim: 0,
            sleep: 0,
            eat: 0,

        }))
        //Navigate to home

        //Save to 'DB'
    }

    render() {

        const metaInfo = getMetricMetaInfo()

        return (
            <View>
                <Text>Add Entry</Text>
                <Text>Add Entry</Text>
                <Text>Add Entry</Text>
                <Text>Add Entry ya????</Text>
                <DateHeader date={(new Date().toLocaleDateString())} />

                <Text>{JSON.stringify(this.state)}</Text>

                {Object.keys(metaInfo).map((key) => {
                    const { getIcon, type, ...rest } = metaInfo[key]
                    const value = this.state[key]

                    return (
                        <View key={key}>
                            {getIcon()}
                            {type === 'slider' ?
                                <UdaciSlider
                                    value={value}
                                    onChange={(value) => this.slide(key, value)}
                                    {...rest}
                                />
                                : <UdaciSteppers
                                    value={value}
                                    onIncrement={() => this.increment(key)}
                                    onDecrement={() => this.decrement(key)}
                                    {...rest}
                                />
                            }
                        </View>
                    )
                })
                }

                <SubmitBtn onPress={this.submit} />

            </View>
        )
    }
}