export default async function getUserDetails(setUserDetails: Function | null) {
  let localCreds = localStorage.getItem("sb-rpmzykoxqnbozgdoqbpc-auth-token");

  let localCredsJSON = localCreds ? JSON.parse(localCreds) : null;
  let userDetails = {
    data: localCredsJSON,
  };
  if (setUserDetails) {
    setUserDetails(userDetails);
  }
  return userDetails;
}
