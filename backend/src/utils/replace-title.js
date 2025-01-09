
export async function replaceTitle(title) {
    return title.replace(/["'“”]/g, "").replace(/[\/]/g, "-")

}