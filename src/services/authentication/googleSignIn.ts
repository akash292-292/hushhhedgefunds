import resources from "../../resources/resources";
export default async function googleSignIn() {
  const supabase = resources.config.supabaseClient;
  await supabase.auth
    .signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: resources.config.redirect_url,
        queryParams: {
          access_type: "offline",
          prompt: "select_account",
        },
      },
    })
    .then(() => {});
}
