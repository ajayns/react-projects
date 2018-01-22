import React from 'react';
import { 
    StyleSheet, 
    Text,
    TextInput, 
    View,
    Button,
    ActivityIndicator,
    Image
} from 'react-native';

const generateQuery = (key, value, pageNumber) => {
    const data = {
        country: 'uk',
        pretty: '1',
        encoding: 'json',
        listing_type: 'buy',
        action: 'search_listings',
        page: pageNumber,
    };

    data[key] = value;

    const queryString = Object.keys(data)
        .map(key => `${key}=${encodeURIComponent(data[key])}`)
        .join('&');
    
    return 'https://api.nestoria.co.uk/api?' + queryString;
}

export default class SearchPage extends React.Component {
    static navigationOptions = {
        title: 'Property Finder',
    };

    constructor(props) {
        super(props);
        this.state = {
            searchString: 'london',
            isLoading: false,
            message: ''
        };
    }

    searchQuery(q) {
        this.setState({
            isLoading: true
        })
        fetch(query)
            .then(res => res.json())
            .then(json => this.handleResponse(json.response))
            .catch(err =>
                this.setState({
                    isLoading: false,
                    message: 'Something bad happened'
                })
            )
    }

    handleResponse(res) {
        this.setState({
            isLoading: false,
            message: ''
        });

        if (response.application_response_code.substr(0, 1) === '1') {
            this.props.navigation.navigate(
                'Results', 
                {listings: response.listings}
            );
        } else {
            this.setState({ message: 'Location not recognized; please try again.' });
        }
    }

    onSearch() {
        const query = generateQuery('place_name', this.state.searchString, 1);
        this.searchQuery(query);
    }

    handleSearchChange(e) {
        this.setState({
            searchString: e.nativeEvent.text
        })
    }

    render() {

        if(this.state.isLoading) {
            return <ActivityIndicator size='large' />;
        } else {
            return (
                <View style={styles.container}>
                    <Text style={styles.description}>Search for houses to buy!</Text>
                    <View style={styles.flowRight}>
                        <TextInput
                            underlineColorAndroid={'transparent'}
                            style={styles.searchInput}
                            value={this.state.searchString}
                            onChange={this.handleSearchChange}
                            placeholder='Search via name or postcode' />
                        <Button
                            onPress={this.onSearch}
                            color='#48BBEC'
                            title='Go'
                        />
                    </View>
                    <Image source={require('../resources/house-icon.png')} style={styles.image} />
                    <Text style={styles.description}>{this.state.message}</Text>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flowRight: {
        flexDirection: 'row',
    },
    image: {
        width: 240,
        height: 240,
    }
});
