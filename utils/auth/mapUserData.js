export const mapUserData = (user) => {
  const { uid, email, xa, ya, displayName } = user
  return {
    id: uid,
    email,
    token: xa || ya,
    displayName,
  }
}