import Image from "next/image";
import ItemBtn from "@/component/ItemBtn";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <h2>Hot Selling</h2>
      <div className={styles.grid}>
        <ItemBtn
          image="https://cache.wemixplay.com/ADMIN-CONSOLE/GAME/ncgl/7cef5a35-9660-4876-8e85-eaa076c542a4.png"
          title="NIGHT CROWS"
          desc="Created with Unreal Engine 5, NIGHT CROWS is set in 13th-century Europe, where magic exists."
        />

        <ItemBtn
          image="https://cache.wemixplay.com/ADMIN-CONSOLE/GAME/mir4/886cf044-3978-46d3-ab9c-683512e22a95.png"
          title="MIR4"
          desc="MIR4 is a Free-to-Play Open World Fantasy MMORPG that can be played on both PC and mobile devices."
        />

        <ItemBtn
          image="https://cache.wemixplay.com/ADMIN-CONSOLE/GAME/dekaron-g/63d05501-a1ff-4816-9534-97c530ba9731.png"
          title="Dekaron G"
          desc="A new adventure is waiting for you in Dekaron G, the new standard for Play & Earn."
        />

        <ItemBtn
          image="https://cache.wemixplay.com/ADMIN-CONSOLE/GAME/mir-m/79c63914-d647-4d17-98d0-080c60d978e2.png"
          title="MIR M: Vanguard and Vagabond"
          desc="The largest P&E MMORPG in the world and the official sequel to MIR4"
        />

        <ItemBtn
          image="https://cache.wemixplay.com/ADMIN-CONSOLE/GAME/yulgang-global/6f47336a-d8b7-4b9d-9a1f-5d5fa231a556.png"
          title="YULGANG GLOBAL"
          desc="Successing the popular mobile game 'Yulgang Online'"
        />
      </div>
    </main>
  );
}
