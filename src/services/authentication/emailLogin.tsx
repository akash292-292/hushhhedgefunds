import resources from "../../resources/resources";
export default async function emailLogin(email: string, password: string) {
  const supabase = resources.config.supabaseClient;
  await supabase.auth
    .signInWithPassword({
      email: email,
      password: password,
    })
    .then((response) => {
      console.log(response);
      window.location.href = resources.config.redirect_url;
    });
}
