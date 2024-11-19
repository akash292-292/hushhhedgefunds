import resources from "../../resources/resources";
export default async function emailLogin(email: string, password: string) {
  const supabase = resources.config.supabaseClient;
  let { data: data, error: error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    return "error";
  } else {
    localStorage.setItem("isLoggedIn", "true"); // Set login state
    window.location.href = resources.config.redirect_url;
  }
  return data;
}
