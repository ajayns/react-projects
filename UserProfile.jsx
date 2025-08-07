import React, { Component } from 'react';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
      error: null,
    };
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  componentDidMount() {
    this.fetchUser();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) {
      this.fetchUser();
    }
  }

  componentWillUnmount() {
    // Cleanup if needed (e.g., abort fetch)
    if (this.abortController) {
      this.abortController.abort();
    }
  }

  fetchUser() {
    this.abortController = new AbortController();
    this.setState({ loading: true, error: null });

    fetch(`https://api.example.com/users/${this.props.userId}`, {
      signal: this.abortController.signal,
    })
      .then((response) => response.json())
      .then((data) => this.setState({ user: data, loading: false }))
      .catch((error) => {
        if (error.name !== 'AbortError') {
          this.setState({ error: error.message, loading: false });
        }
      });
  }

  handleRefresh() {
    this.fetchUser();
  }

  render() {
    const { user, loading, error } = this.state;

    if (loading) return <p>Loading user data...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
      <div>
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <button onClick={this.handleRefresh}>Refresh</button>
      </div>
    );
  }
}

export default UserProfile;
