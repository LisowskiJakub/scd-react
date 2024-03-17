import ImageGallery from "react-image-gallery";
import css from './Gallery.module.css'
import 'react-image-gallery/styles/css/image-gallery.css'
const images = [

    {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
    },

]

export const Gallery = () => (
    <section className={css.gallery}>
        <ImageGallery
            items={images}
            loading={"lazy"}
            renderItem={false} />
    </section>
)


