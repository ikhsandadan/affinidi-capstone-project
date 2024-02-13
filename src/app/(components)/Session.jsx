"use server";
import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';

const Session = async () => {
    const session = await getServerSession(options);
    const accessToken = session?.accessToken;
    const userId = session?.userId;
    const user = session?.user;
    const idToken = session?.idToken;
    const email = session?.email;
    const picture = session?.picture;
    const country = session?.country;
    const givenName = session?.givenName;
    const familiyName = session?.familyName;
    const phoneNumber = session?.phoneNumber;
    const postalCode = session?.postalCode;
    const streetAddress = session?.streetAddress;
    const locality = session?.locality;
    
    return {accessToken, idToken, userId, user, email, picture, country, givenName, familiyName, phoneNumber, postalCode, streetAddress, locality};
}

export default Session