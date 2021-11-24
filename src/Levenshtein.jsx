import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';


export default function Levenshtein({ navigation }) {
    const [str1, useStr1] = useState('');
    const [str2, useStr2] = useState('');

    const levenshteinDistance = (str1, str2) => {
        const track = Array(str2.length + 1).fill(null).map(() =>
            Array(str1.length + 1).fill(null));
        for (let i = 0; i <= str1.length; i += 1) {
            track[0][i] = i;
        }
        for (let j = 0; j <= str2.length; j += 1) {
            track[j][0] = j;
        }
        for (let j = 1; j <= str2.length; j += 1) {
            for (let i = 1; i <= str1.length; i += 1) {
                const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
                track[j][i] = Math.min(
                    track[j][i - 1] + 1, // deletion
                    track[j - 1][i] + 1, // insertion
                    track[j - 1][i - 1] + indicator, // substitution
                );
            }
        }
        return track[str2.length][str1.length];
    };
    console.log(levenshteinDistance(str1, str2));

    return (
        <View style={styles.fundo}>
            <View style={{ alignItems: 'center', marginBottom: 30 }}>
                <Text style={styles.texto}>
                    Algoritimo de Levenshtein
                </Text>
            </View>
            <TextInput
                style={styles.textInput}
                onChangeText={useStr1}
                value={str1}
                placeholder={'Digite'}
            />
            <TextInput
                style={styles.textInput}
                onChangeText={useStr2}
                value={str2}
                placeholder={'Digite'}
            />
            <View
                style={{ flexDirection: 'column', alignItems: 'center' }}
            >
                <Text style={styles.texto}>
                    Mudanças e possibilidades
                </Text>
                <Text style={styles.texto}>
                    {levenshteinDistance(str1, str2)}
                </Text>
            </View>
            <TouchableOpacity
                style={styles.input}
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>API</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        width: '80%',
        height: '5%',
        borderWidth: 2,
        padding: 5,
        margin: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    input: {
        width: 150,
        height: 30,
        backgroundColor: 'green',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    fundo: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
});