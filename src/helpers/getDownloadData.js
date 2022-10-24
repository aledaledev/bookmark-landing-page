const getDownloadData = async ()=>{
    const res = await fetch("./data/download.json")
    return await res.json()
}
export default getDownloadData