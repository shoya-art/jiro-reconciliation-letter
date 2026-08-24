import Image from "next/image";

const consultationItems = [
  ["01", "2人が別れた本当の原因", "彼に言われた理由だけでなく、付き合う中で何が積み重なっていたのかまで見ます。"],
  ["02", "彼の性格・男性心理", "彼がどんな恋愛をする人なのか、今どんな気持ちでいるのかを整理します。"],
  ["03", "今の2人の状態", "今は連絡する時なのか、まだ待った方がいいのか。今の距離感を一緒に見ます。"],
  ["04", "繰り返してきた恋愛パターン", "不安になった時に何を考え、どんな行動を取ってきたのか。別れにつながったパターンを見つけます。"],
  ["05", "今、動くのか。待つのか。", "LINEした方がいいのか、何もしない方がいいのか。あなたと彼の場合で決めます。"],
  ["06", "次に何をするのか", "相談後に迷わないよう、ここから実際にやることまで一緒に決めます。"],
];

const faqs = [
  ["別れてから時間が経っています。それでも相談していいですか？", "もちろん大丈夫です。期間だけで復縁できるかどうかは決まりません。今の2人の関係、別れた原因、彼が今どんな状態なのかを見ながら、残っている可能性を一緒に整理します。"],
  ["彼にブロックされています。それでも相談できますか？", "大丈夫です。ブロックされた結果だけでなく、なぜそこまで関係が悪くなったのかを見ることが大切です。今すぐ連絡を取ることだけを目標にせず、今の状況でできることから整理します。"],
  ["彼に新しい女性がいそうです。それでも意味はありますか？", "それだけで諦める必要はありません。新しい女性との関係や、今のあなたと彼にどんな関係が残っているのかまで見たうえで考えていきましょう。"],
  ["自分にどんな恋愛パターンがあるのか分かりません。", "分からなくて大丈夫です。今の彼とのことだけでなく、これまでの恋愛も聞きながら、不安になった時の考え方や行動を一緒に整理します。"],
  ["内面改善って、結局何をするんですか？", "まずは別れにつながった考え方や行動を知ること。そこから、不安や我慢に振り回されず、彼と落ち着いて向き合える状態をつくっていきます。難しいことをいきなり始めるものではありません。"],
  ["昔このLINEを追加した時とは、違う彼の相談でもいいですか？", "もちろん大丈夫です。前に悩んでいた彼でなくても、その後に付き合った彼でも、最近別れた彼でも問題ありません。今あなたの頭から離れない彼のことを聞かせてください。"],
];

const painCards = [
  ["/images/pain-morning-v2.png", "朝起きて、LINEの通知が\n来ていないのを見て気持ちが落ちる。", "朝、通知を確認して落ち込む女性"],
  ["/images/pain-commute-v2.png", "仕事中は普通に過ごしているのに、\n帰宅途中にふと彼を思い出す。", "帰宅途中に彼を思い出す女性"],
  ["/images/pain-memories-v2.png", "彼との昔のLINEを遡って、\n「あの時は幸せだったな」と過去の自分を後悔する。", "昔のLINEと写真を見返す女性"],
  ["/images/pain-social-night.png", "彼がSNSを更新していると、\n知らない女性が写っていないか確認してしまう。", "夜に彼のSNSが気になってしまう女性"],
];

function CTA({ label = "無料個別相談で、復縁への一歩を進める" }: { label?: string }) {
  return <div className="ctaWrap"><div className="urgencyBar"><span><small>今回ご案内できるのは</small><b>限定 <em>15</em>名</b></span><i/><span><small>お申し込みの受付は</small><b>募集開始から <em>3</em>日間</b></span></div><a className="cta" href="#form-pending">{label}<small>1時間程度・日程は個別に調整します</small></a><span className="formNote">※申込フォームは準備中です</span></div>;
}

export default function Home() {
  return <main>
    <section className="hero">
      <div className="heroCopy"><p className="eyebrow">大切な人との別れに悩むあなたへ</p><h1>別れたあとも、<br />なぜか彼のことが<br />頭から離れないあなたへ</h1><p className="heroLead">「もう忘れた方がいい」と思っているのに<br />なぜ彼は何度も頭に浮かぶのか？</p></div>
      <div className="heroImage hopeImage"><Image src="/images/hero-joy-v3.png" alt="カフェで心から笑い合う幸せなカップル" fill priority sizes="(max-width:720px) 100vw,720px"/><div className="imageShade"/><p className="imageMessage">彼を想って苦しくなる毎日から、<br /><strong>また彼の隣で笑っている毎日へ。</strong></p></div>
      <div className="futureLine"><p>「あの時、諦めなくてよかった」</p><strong>そう思える未来は、<br />「今」ここから始まります。</strong></div>
    </section>

    <section className="section proof"><div className="sectionHeading"><h2>ジローと一緒に<br />幸せを掴んだ人たち</h2></div><p className="proofIntro">6,000件以上の復縁相談を通して、<br />一人ひとり違う恋愛と向き合ってきました。</p><div className="proofGrid">{[1,2,3,4,5].map(n=><div className="proofPlaceholder" key={n}><span>実績 {n}</span><small>画像をここに掲載</small></div>)}</div><p className="replacementNote">※お預かりする実績画像に差し替えます</p></section>

    <section className="section empathy"><div className="sectionHeading"><h2>今のあなたは、<br />こんな気持ちじゃないですか？</h2></div><div className="painList">{painCards.map(([src,copy,alt])=><article className="painCard" key={src}><div className="painPhoto"><Image src={src} alt={alt} fill sizes="(max-width:720px) 100vw,720px"/><div className="painShade"/><p>{copy.split("\n").map((line,index)=><span key={line}>{line}{index===0&&<br/>}</span>)}</p></div></article>)}</div><div className="desireCallout"><span>戻れるなら、</span><h2>もう一度戻りたい。</h2><p>今のあなたがこんな気持ちなら、<br /><strong>絶対に知ってほしいことがあります。</strong></p></div></section>

    <section className="section cause"><p className="chapter">知識を増やしても、苦しさが消えない理由</p><h2>あなたが今でも彼を<br />思い出してしまう原因</h2><p>InstagramもYouTubeも見た。<br />ネットでも復縁についてたくさん調べた。</p><h3>「で、私は何をしたらいいんだろう？」</h3><p>知識は増えたのに、彼のことになると答えが出ない。</p><div className="fearVisual"><Image src="/images/fear-unloved-v2.png" alt="最後には愛されなくなるという不安を抱える女性" fill sizes="(max-width:720px) 100vw,720px"/><div className="fearShade"/><div className="fearCopy"><p>それでも苦しさが消えないのは、<br />あなたの中に</p><h2>「私は最後には<br />愛されなくなる」</h2><strong>という感覚が残ったままだからです。</strong></div></div></section>

    <section className="answerCallout"><span>調べても、学んでも</span><h2>「私と彼の場合」が<br />分からない。</h2><p>必要なのは、知識をもう一つ増やすことではなく、<br />あなた自身に残った痛みを見ることでした。</p></section>

    <section className="section purification"><p className="chapter">あなたが悪いわけではありません</p><h2 className="knowledgeHeading">必要なのは、さらに復縁の知識を<br />増やすことではありません</h2><p>別れにつながった考え方や行動を整理して、<br />彼と落ち着いて向き合える自分に変わっていくこと。</p><div className="purificationVisual"><Image src="/images/healing-light.png" alt="自分の内面と向き合い穏やかな表情を取り戻す女性" fill sizes="(max-width:720px) 100vw,720px"/><div className="purificationShade"/><div className="purificationCopy"><p>それが、僕の考える</p><h3>「内面改善」です。</h3><h2>彼に好かれるために<br />自分を偽るのではなく、<br /><em>不安に振り回されない自分</em>として<br />彼と向き合うために。</h2></div></div></section>

    <section className="section soul"><div className="sectionHeading"><h2>彼との間で起きたことは、<br />今回の別れだけが原因じゃない</h2></div><div className="patternMap"><span>浮気された経験</span><span>突然フラれた記憶</span><strong>不安になる<br />我慢する<br />最後にぶつける</strong><span>誰かと比べられた経験</span><span>大切な人が離れた経験</span></div><ul className="woundList"><li>昔の彼に浮気された</li><li>好きだった人に突然フラれた</li><li>小さい頃から誰かと比べられてきた</li><li>大切だった人に離れられた</li></ul><p>こうした過去の経験が、<br />「また愛されなくなるかもしれない」という不安につながる。<br /><br />返信が遅いだけで不安になったり、<br />他の女性が気になったり、<br /><br />我慢した気持ちを<br />最後にぶつけてしまったり。</p><div className="repetitionCallout"><p>同じことを繰り返してしまうのは、</p><h2>あなたに魅力がない<br />からではありません。</h2><strong>過去の恋愛で身についた考え方や反応が、<br />今も残っているからなんです。</strong></div></section>

    <section className="section experience"><h2>別れの原因も、繰り返す恋愛パターンも<br />一人ずつ違いました</h2><div className="bigNumber">6,000<small>件以上</small></div><p>本当に一人として、同じ恋愛はしていませんでした。</p><div className="voices"><p>「返信が来なくて不安になり、何通もLINEしてしまった」</p><p>「元カノと自分を比べて、好きと言われても信じられなかった」</p><p>「嫌われたくなくて我慢して、最後に全部ぶつけてしまった」</p></div><p>全員に同じ方法を当てはめても、<br />その人に必要な内面改善までは分かりません。</p><h3>まず知るべきなのは、<br />あなたと彼の間で何が起きて、<br />どんな考え方や行動を変える必要があるのか。</h3></section>

    <section className="section offer" id="apply"><p className="chapter">ここまで読んでくれたあなたのためへ</p><h2>今回だけ、<br />無料個別相談を開催します。</h2><p>「私は、何を変えたらいいの？」<br />「私と彼の場合は、何をしたらいいの？」</p><div className="offerHero"><span>あなたと彼の状況を僕が直接聞いて</span><h2>無料<br /><em>特別個別相談</em></h2><p>今の二人に必要な内面改善と行動を<br />一緒に整理します。</p></div><CTA label="ジローと一緒に、復縁への一歩を進める"/></section>

    <section className="consultationVisual"><div className="consultationVisualPhoto"><Image src="/images/online-consultation.png" alt="オンライン個別相談で気持ちを整理する女性" fill sizes="(max-width:720px) calc(100vw - 40px),640px"/><div className="consultationShade"/><div className="consultationVisualCopy"><span>一人で答えを出さなくて大丈夫です</span><h2>話すことで、<br />見えてくることがある。</h2><p>一人では見えなかった別れの原因も、彼の今の心理も、言葉にすることで整理されていきます。あなたと彼の状況を聞きながら、今の二人に必要なことを一緒に見つけます。</p></div></div></section>

    <section className="section consultation"><div className="sectionHeading"><h2>個別相談で一緒に整理すること</h2></div><div className="consultationList">{consultationItems.map(([n,t,d])=><article key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></article>)}</div><div className="specialNote"><p>「私と彼の場合はどうなの？」を<br />そのまま僕に聞ける特別な相談企画です。</p><strong>今まで一人で調べて、考えて、迷ってきたことを<br />この機会に全部持ってきてください。</strong></div><CTA/></section>

    <section className="section proof secondProof"><div className="sectionHeading"><h2>ジローと一緒に<br />幸せを掴んだ人たち</h2></div><p className="proofIntro">一人で悩み続けることをやめて、<br />自分の恋愛と向き合った方々の記録です。</p><div className="wideProof"><p>実績写真・LINEスクリーンショットを<br />ここに掲載します</p></div><div className="wideProof"><p>相談者さまの変化や<br />喜びの声をここに掲載します</p></div><CTA label="ジローに個別相談してみる"/></section>

    <section className="section undecided"><p className="chapter">迷ったままでも大丈夫です</p><div className="undecidedVisual"><Image src="/images/undecided-heart.png" alt="彼への気持ちをまだ決め切れず、穏やかに自分の心と向き合う女性" fill sizes="(max-width:720px) 100vw,720px"/><div className="undecidedShade"/><h2>100%「彼と戻りたい」と<br />思っていなくても大丈夫です。</h2></div><div className="checkList"><p>彼のことはまだ好きだけど、戻るのが正解か分からない</p><p>復縁できたら嬉しい。でも、また同じことを繰り返すのは嫌</p><p>もう少し頑張りたいけれど、諦めた方がいいのかとも思う</p><p>自分でも、彼への気持ちをうまく整理できない</p></div><p><strong>こんな状態のまま参加して大丈夫です。</strong><br /><br />「私は本当に彼と戻りたいの？」<br />そこから一緒に整理するための個別相談でもあります。</p></section>

    <section className="section faq"><div className="sectionHeading"><h2>個別相談についてのQ&A</h2></div>{faqs.map(([q,a],i)=><details key={q} open={i===0}><summary><span>Q</span>{q}</summary><div className="answer"><span>A</span><p>{a}</p></div></details>)}</section>

    <section className="section finale"><p>彼ともう一度やり直したいなら、<br />そのために今できることを一緒に見つければいい。</p><p>まだ自分の気持ちが分からないなら、<br />無理に答えを決めなくても大丈夫です。</p><div className="finalQuote"><span>いつか、また彼の隣で笑いながら</span><h2>「あの時、諦めなくてよかった」</h2><p>そう思える未来を、<br />一緒に目指していきましょう。</p></div><div className="finalHappyPhoto"><Image src="/images/final-real-couple-v2.png" alt="同棲や結婚後の日常の中で自然に寄り添い笑うカップル" fill sizes="(max-width:720px) 100vw,720px"/></div><CTA label="ジローに個別相談してみる"/><p className="signature">復縁アドバイザー　ジロー</p></section>

    <footer><p>本ページの写真は未来のイメージを表現したものです。<br />相談の結果や復縁を保証するものではありません。</p><small>© ジロー＠復縁アドバイザー</small></footer>
  </main>;
}
