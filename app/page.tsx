import Image from "next/image";

const consultationItems = [
  ["01", "2人が別れた本当の原因", "彼に言われた理由だけでなく、付き合う中で何が積み重なっていたのかまで見ます。"],
  ["02", "彼の性格・男性心理", "彼がどんな恋愛をする人なのか、今どんな気持ちでいるのかを整理します。"],
  ["03", "今の2人の状態", "今は連絡する時なのか、まだ待った方がいいのか。今の距離感を一緒に見ます。"],
  ["04", "あなたの魂に残っている傷", "なぜ彼のことになると苦しくなるのか。どこを浄化した方がいいのかを見つけます。"],
  ["05", "今、動くのか。待つのか。", "LINEした方がいいのか、何もしない方がいいのか。あなたと彼の場合で決めます。"],
  ["06", "次に何をするのか", "相談後に迷わないよう、ここから実際にやることまで一緒に決めます。"],
];

const faqs = [
  ["別れてから時間が経っています。それでも相談していいですか？", "もちろん大丈夫です。期間だけで復縁できるかどうかは決まりません。今の2人の関係、別れた原因、彼が今どんな状態なのかを見ながら、残っている可能性を一緒に整理します。"],
  ["彼にブロックされています。それでも相談できますか？", "大丈夫です。ブロックされた結果だけでなく、なぜそこまで関係が悪くなったのかを見ることが大切です。今すぐ連絡を取ることだけを目標にせず、今の状況でできることから整理します。"],
  ["彼に新しい女性がいそうです。それでも意味はありますか？", "それだけで諦める必要はありません。新しい女性との関係や、今のあなたと彼にどんな関係が残っているのかまで見たうえで考えていきましょう。"],
  ["自分の魂にどんな傷があるのか分かりません。", "分からなくて大丈夫です。今の彼とのことだけでなく、これまでの恋愛も聞きながら、今のあなたを苦しめている傷を一緒に見つけます。"],
  ["浄化って、結局何をするんですか？", "まずは魂にどんな傷が残っているのかを知ること。そこから、その傷によって残った痛みや不安を手放し、本来のあなたに戻していきます。難しいことをいきなり始めるものではありません。"],
  ["昔このLINEを追加した時とは、違う彼の相談でもいいですか？", "もちろん大丈夫です。前に悩んでいた彼でなくても、その後に付き合った彼でも、最近別れた彼でも問題ありません。今あなたの頭から離れない彼のことを聞かせてください。"],
];

const painCards = [
  ["/images/pain-morning.png", "朝起きて、LINEの通知が\n来ていないのを見て気持ちが落ちる。", "朝、通知を確認して落ち込む女性"],
  ["/images/pain-commute.png", "仕事中は普通に過ごしているのに、\n帰宅途中にふと彼を思い出す。", "帰宅途中に彼を思い出す女性"],
  ["/images/pain-memories.png", "彼との昔のLINEを遡って、\n「あの時は幸せだったな」と過去の自分を後悔する。", "昔のLINEと写真を見返す女性"],
  ["/images/night-checking.png", "彼がSNSを更新していると、\n知らない女性が写っていないか確認してしまう。", "夜に彼のSNSが気になってしまう女性"],
];

function CTA({ label = "無料個別相談に申し込む" }: { label?: string }) {
  return <div className="ctaWrap"><p><b>限定15名</b><span>募集開始から3日間</span></p><a className="cta" href="#form-pending">{label}<small>1時間程度・日程は個別に調整します</small></a><span className="formNote">※申込フォームは準備中です</span></div>;
}

export default function Home() {
  return <main>
    <section className="hero">
      <div className="heroCopy"><p className="eyebrow">大切な人との別れに悩むあなたへ</p><span className="ornament">✦</span><h1>別れたあとも、<br />なぜか彼のことが<br />頭から離れないあなたへ</h1><p className="heroLead">「もう忘れた方がいい」と思っているのに<br />なぜ彼は何度も頭に浮かぶのか？</p></div>
      <div className="heroImage hopeImage"><Image src="/images/future-together.png" alt="彼と再び笑い合える未来をイメージしたカップル" fill priority sizes="(max-width:720px) 100vw,720px"/><div className="imageShade"/><p className="imageMessage">彼を想って苦しくなる毎日から、<br /><strong>また彼の隣で笑っている毎日へ。</strong></p></div>
      <div className="futureLine"><p>「あの時、諦めなくてよかった」</p><strong>そう思える未来は、<br />「今」ここから始まります。</strong></div>
    </section>

    <section className="section proof"><div className="sectionHeading"><h2>ジローと一緒に<br />幸せを掴んだ人たち</h2></div><p className="proofIntro">6,000件以上の復縁相談を通して、<br />一人ひとり違う恋愛と向き合ってきました。</p><div className="proofGrid">{[1,2,3,4,5].map(n=><div className="proofPlaceholder" key={n}><span>実績 {n}</span><small>画像をここに掲載</small></div>)}</div><p className="replacementNote">※お預かりする実績画像に差し替えます</p></section>

    <section className="section empathy"><div className="sectionHeading"><span>心の奥にある、本当の気持ち</span><h2>今のあなたは、<br />こんな気持ちじゃないですか？</h2></div><div className="painList">{painCards.map(([src,copy,alt])=><article className="painCard" key={src}><div className="painPhoto"><Image src={src} alt={alt} fill sizes="(max-width:720px) 100vw,720px"/></div><p>{copy.split("\n").map((line,index)=><span key={line}>{line}{index===0&&<br/>}</span>)}</p></article>)}</div><blockquote>「戻れるなら、<br /><em>もう一度戻りたい」</em></blockquote><p>もし、今のあなたがこんな感じなら、<br />絶対に知ってほしいことがあります。</p></section>

    <section className="visualChapter visualNight"><Image src="/images/night-checking.png" alt="夜、彼のSNSが気になりスマートフォンを見つめる女性" fill sizes="(max-width:720px) 100vw,720px"/><div className="visualShade"/><div className="visualChapterCopy"><span>ふとした瞬間、また彼を探してしまう</span><h2>新しい女性ができていたら、<br />どうしよう。</h2><p>前を向きたいのに、心だけが<br />あの日から動けないまま。</p></div></section>

    <section className="section cause"><p className="chapter">知識を増やしても、苦しさが消えない理由</p><h2>あなたが今でも彼を<br />思い出してしまう原因</h2><p>InstagramもYouTubeも見た。<br />ネットでも復縁についてたくさん調べた。</p><h3>「で、私は何をしたらいいんだろう？」</h3><p>知識は増えたのに、彼のことになると答えが出ない。<br /><br />それでも苦しさが消えないのは、あなたの中に<br /><strong>「私は最後には愛されなくなる」</strong><br />という感覚が残ったままだからです。</p></section>

    <section className="editorialImage"><div className="editorialPhoto"><Image src="/images/searching-answers.png" alt="復縁について調べても自分の答えが見つからず考え込む女性" fill sizes="(max-width:720px) 100vw,720px"/></div><div className="editorialCaption"><span>調べても、学んでも</span><h2>「私と彼の場合」が<br />分からない。</h2><p>必要なのは、知識をもう一つ増やすことではなく、あなた自身に残った痛みを見ることでした。</p></div></section>

    <section className="section purification"><div className="lightOrb"/><p className="chapter">あなたが悪いわけではありません</p><h2>必要なのは、さらに<br />復縁の知識を増やすことではありません</h2><p>彼を失ったときに残った痛みや不安を手放して、<br />本来のあなたに戻していくこと。</p><div className="purificationCard"><span className="goldLine"/><h3>それが、僕の言う<br /><em>「浄化」</em>なんです。</h3></div></section>

    <section className="photoStory"><Image src="/images/healing-light.png" alt="朝の光の中で穏やかな表情を取り戻す女性" fill sizes="(max-width:720px) 100vw,720px"/><div className="photoStoryCopy"><p>心だけじゃなく、<br />魂にまで残った傷を癒す。</p><h2>傷ついたあなたではなく、<br /><em>本来のあなた</em>として<br />彼と向き合うために。</h2></div></section>

    <section className="section soul"><div className="sectionHeading"><h2>魂の濁りは、彼との別れだけで<br />できたものじゃない</h2></div><ul className="woundList"><li>昔の彼に浮気された</li><li>好きだった人に突然フラれた</li><li>小さい頃から誰かと比べられてきた</li><li>大切だった人に離れられた</li></ul><p>そんな小さな傷が、魂に少しずつ残っていく。<br /><br />返信が遅いだけで不安になったり、他の女性が気になったり、我慢した気持ちを最後にぶつけてしまったり。</p><div className="reassurance"><p>同じことを繰り返してしまうのは、<br /><strong>あなたが変われていないからではありません。</strong></p><p>昔できた傷が、癒えていないまま<br />魂の中に残っているからなんです。</p></div></section>

    <section className="mirrorStory"><div className="mirrorPhoto"><Image src="/images/inner-wounds.png" alt="鏡の中の自分と静かに向き合う女性" fill sizes="(max-width:720px) 100vw,720px"/></div><div className="mirrorCopy"><span>責めるためではなく、癒すために。</span><h2>本当のあなたを、<br />傷ついたままにしない。</h2><p>過去の恋愛や経験から残った感覚に気づくことが、同じ苦しさを繰り返さない最初の一歩です。</p></div></section>

    <section className="section experience"><p className="chapter">6,000件以上の復縁相談を受けて</p><h2>「魂の傷」は<br />一人ずつ違いました</h2><div className="bigNumber">6,000<small>件以上</small></div><p>本当に一人として、同じ恋愛はしていませんでした。</p><div className="voices"><p>「返信が来なくて不安になり、何通もLINEしてしまった」</p><p>「元カノと自分を比べて、好きと言われても信じられなかった」</p><p>「嫌われたくなくて我慢して、最後に全部ぶつけてしまった」</p></div><p>全員に同じ方法を当てはめても、<br />その人の魂の傷までは癒せません。</p><h3>まず知るべきなのは、<br />あなたと彼の間で何が起きて、<br />魂のどこに傷が残ったのか。</h3></section>

    <section className="section offer" id="apply"><p className="chapter">ここまで読んでくれたあなたへ</p><h2>今回だけ、<br />特別に開催します。</h2><p>「私の魂には、どんな傷が残っているの？」<br />「私と彼の場合は、何をしたらいいの？」</p><div className="offerHero"><span>あなたと彼のことを僕が直接見て</span><h2>無料<br /><em>特別個別相談</em></h2><p>今の二人に必要なことを<br />一緒に整理します。</p></div><CTA label="無料個別相談に参加する"/></section>

    <section className="consultationVisual"><div className="consultationVisualPhoto"><Image src="/images/online-consultation.png" alt="オンライン個別相談で気持ちを整理する女性" fill sizes="(max-width:720px) calc(100vw - 40px),640px"/></div><div className="consultationVisualCopy"><span>一人で答えを出さなくて大丈夫です</span><h2>話すことで、<br />見えてくることがある。</h2><p>あなたと彼の状況を聞きながら、今の二人に必要なことを一緒に整理します。</p></div></section>

    <section className="section consultation"><div className="sectionHeading"><h2>相談で一緒に整理すること</h2></div><div className="consultationList">{consultationItems.map(([n,t,d])=><article key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></article>)}</div><div className="specialNote"><p>「私と彼の場合はどうなの？」を<br />そのまま僕に聞ける特別な相談企画です。</p><strong>今まで一人で調べて、考えて、迷ってきたことを<br />この機会に全部持ってきてください。</strong></div><CTA/></section>

    <section className="section proof secondProof"><div className="sectionHeading"><h2>実際の復縁実績</h2></div><div className="wideProof"><p>実績写真・LINEスクリーンショットを<br />ここに掲載します</p></div><div className="wideProof"><p>相談者さまの変化や<br />喜びの声をここに掲載します</p></div><CTA label="ジローに個別相談してみる"/></section>

    <section className="section undecided"><p className="chapter">迷ったままでも大丈夫です</p><h2>100%「彼と戻りたい」と<br />思っていなくても大丈夫です。</h2><div className="checkList"><p>彼のことはまだ好きだけど、戻るのが正解か分からない</p><p>復縁できたら嬉しい。でも、また同じことを繰り返すのは嫌</p><p>もう少し頑張りたいけれど、諦めた方がいいのかとも思う</p><p>自分でも、彼への気持ちをうまく整理できない</p></div><p><strong>こんな状態のまま参加して大丈夫です。</strong><br /><br />「私は本当に彼と戻りたいの？」<br />そこから一緒に整理するための個別相談でもあります。</p></section>

    <section className="section faq"><div className="sectionHeading"><h2>個別相談についてのQ&A</h2></div>{faqs.map(([q,a],i)=><details key={q} open={i===0}><summary><span>Q</span>{q}</summary><div className="answer"><span>A</span><p>{a}</p></div></details>)}</section>

    <section className="futurePhoto"><Image src="/images/future-together.png" alt="将来の可能性をイメージした、光の中を歩く男女" fill sizes="(max-width:720px) 100vw,720px"/><div className="futureShade"/><div className="futureCopy"><p>もし今も彼のことを考えてしまうなら</p><h2>その気持ちに、<br />無理にフタをしなくていい。</h2></div></section>

    <section className="section finale"><p>彼ともう一度やり直したいなら、<br />そのために今できることを一緒に見つければいい。</p><p>まだ自分の気持ちが分からないなら、<br />無理に答えを決めなくても大丈夫です。</p><div className="finalQuote"><span>いつか、また彼の隣で笑いながら</span><h2>「あの時、諦めなくてよかった」</h2><p>そう思える未来を、<br />一緒に目指していきましょう。</p></div><CTA label="ジローに個別相談してみる"/><p className="signature">復縁アドバイザー　ジロー</p></section>

    <footer><p>本ページの写真は未来のイメージを表現したものです。<br />相談の結果や復縁を保証するものではありません。</p><small>© ジロー＠復縁アドバイザー</small></footer>
  </main>;
}
