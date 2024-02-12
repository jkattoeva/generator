import Generator from "@/components/imageGenerator/ImgGenerator";
import cls from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <div className={cls.home_page}>
        <Generator />
      </div>
    </>
  );
}
