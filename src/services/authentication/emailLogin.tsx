import resources from "../../resources/resources";
export default async function emailLogin(email: string, password: string) {
  const supabase = resources.config.supabaseClient;
  await supabase.auth
    .signInWithPassword({
      email: email,
      password: password,
    })
    .then((response) => {
      if (response.error) {
        console.error(response.error);
      } else {
        localStorage.setItem('isLoggedIn', 'true'); // Set login state
        window.location.href = resources.config.redirect_url;
      }
    });
}