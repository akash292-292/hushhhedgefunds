import resources from "../../resources/resources";
export default async function appleSignIn(){
    const supabase = resources.config.supabaseClient;
    await supabase.auth
      .signInWithOAuth({
        provider: 'apple',
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