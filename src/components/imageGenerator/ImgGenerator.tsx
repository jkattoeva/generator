import defaultImage from "@/assets/default.jpg";
import Image from "next/image";
import cls from "@/styles/ImgGenerator.module.scss";

export default function Generator() {
  return (
    <>
      <div className={cls.generator}>
        <div className={cls.title}>
          AI Image <span>Generator</span>
        </div>
        <div className={cls.img_loader}>
          <Image src={defaultImage} alt="default ai image" />
        </div>
        <div className={cls.search}>
          <input
            type="text"
            className={cls.search_input}
            placeholder="Generate the picture that you want..."
          />
          <button className={cls.generate}>Generate</button>
        </div>
      </div>
    </>
  );
}
