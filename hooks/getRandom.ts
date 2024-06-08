export default function getRandom(array: { title: string; image: string }[]) {
    const url: string = "http://localhost:4000";
    let first = 0;
    let second = 0;

    if (array.length > 1) {
        first = Math.floor(Math.random() * array.length);
        do {
            second = Math.floor(Math.random() * array.length);
        } while (second === first);
    } else if (array.length === 1) {
        first = 0;
        second = 0; // Assuming you want both captions and images to be the same if there's only one item
    } else {
        return ["No Title", "No Title", `${url}/placeholder.png`, `${url}/placeholder.png`];
    }

    const caption1 = array[first].title || "No Title";
    const caption2 = array[second].title || "No Title";
    const image1 = url + (array[first].image || "/placeholder.png");
    const image2 = url + (array[second].image || "/placeholder.png");

    return [caption1, caption2, image1, image2];
}
