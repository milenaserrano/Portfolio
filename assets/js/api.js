
async function fetchProfileData() {
    const url = 'https://github.com/milenaserrano/Portfolio/blob/master/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
