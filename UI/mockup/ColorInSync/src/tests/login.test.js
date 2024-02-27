import renderer from 'react-test-renderer'
import Login from './../Frames//Login/Login.jsx'
import { GoogleOAuthProvider } from "@react-oauth/google";

it('renders correctly', () => {
    const tree = renderer.create( 
        <GoogleOAuthProvider clientId={process.env.VITE_GOOGLE_OATH_KEY}>
            <Login loginSuccess = {(user) => console.log(user)}></Login>
        </GoogleOAuthProvider>)
    .toJSON();
    expect(tree).toMatchSnapshot()

})