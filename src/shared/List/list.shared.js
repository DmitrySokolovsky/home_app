import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from '../';

export class List extends React.Component {
    constructor(props) {
        super(props);
    }
    
    keyExtractor = (item, index) => index + '';

    renderItem = ({item}) => {
        return (<ListItem item={item}/>);
    }

    render() {
        return (
            <FlatList 
                data={this.props.data}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
            />
        );
    }
}