import {CMS_NAME, CMS_URL} from '../lib/constants';

export default function Intro() {
  return (
    <section className="flex-col flex md:justify-between mb-16 md:mb-12">
      <img src="/images/background.jpg" alt="トップ画像" className="mb-6" />
      <div className="px-3 text-primary">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tighter leading-tight md:pr-8">
          プロのようにうまくなりたい
        </h1>
        <h4 className="md:text-left text-md mt-3 md:pl-8">
          プロのように操作できるようになりたい。VIPに到達したい。ゲーム実況者のようになりたい。そんなあなたのゲームの上達をサポートします！
        </h4>
      </div>
    </section>
  );
}
