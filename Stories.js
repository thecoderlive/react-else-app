import React from 'react'
import { Image, View, FlatList, StyleSheet } from 'react-native'

import StoryList from './StoryList'

const storiesItem = ({ item }) => (
<View style={styles.stories_item}>
<Image
    style={styles.story_thumbnail}
    source={{uri: item.story_thumbnail}}
    />
<StoryList item={item.story_list}/>
</View>
  );

const Stories = ({ item }) => (
<FlatList
    style={styles.stories}
    data={item}
    renderItem={storiesItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default Stories;

const styles = StyleSheet.create({
story_thumbnail: {
    width: '100vw',
    height: '100vw',
    marginTop: 5
  }
});