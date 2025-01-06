
export async function startLoader() {
    document.getElementById("loader").classList.remove("hidden")
    //document.getElementById("message").classList.remove("hidden")
}


export function endLoader() {
    document.getElementById("loader").classList.add("hidden")
    //document.getElementById("message").classList.add("hidden")
}
