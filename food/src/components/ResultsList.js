import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import ResultsDetail from './ResultsDetail'

const ResultsList = ({ title, results, navigation }) => {

    if (!results.length) {
        return null;
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity 
                onPress={() => navigation.navigate('ResultsShow', { id: item.id })}
            >
                <ResultsDetail result={item} />
            </TouchableOpacity>
        );
        
    }
    return (
        <View style={styles.containerStyles}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={result => result.id}
                data={results}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyles: {
        marginBottom: 10,
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
    },
})

export default withNavigation(ResultsList)
