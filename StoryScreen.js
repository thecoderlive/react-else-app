import React from 'react'
import {  ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import Stories from './Stories'

const StoryScreen = () => (
<ScrollView style={styles.story_screen} showsVerticalScrollIndicator={false}>
<Stories item={item.stories}/>
</ScrollView>
)

export default StoryScreen;

const styles = StyleSheet.create({

});