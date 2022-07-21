import { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { ListChildStyle } from './styles';

const ListChild = ({ item }) => {
    const [pressed, setPressed] = useState(false);
    return (
        <TouchableOpacity onPress={() => { setPressed(!pressed) }}>
            < View style={[ListChildStyle.item, { backgroundColor: pressed ? '#00ffff' : '#ececec' }]} >
                <Image
                    style={ListChildStyle.tinyLogo}
                    source={{
                        uri: item.Poster,
                    }}
                />
                <Text style={ListChildStyle.title}>{item.Title}</Text>
            </View >
        </TouchableOpacity >
    );
};

export default ListChild;