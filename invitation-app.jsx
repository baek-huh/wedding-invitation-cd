// invitation-app.jsx — A(Minimal White) 확정 버전

function Invitation({ variant = 'minimal' }) {
  const handleShare = () => {
    if (navigator.share) navigator.share({ title: '허백 ♥ 안지현의 결혼식에 초대합니다', url: location.href });
  };
  return (
    <div style={{
      width: '100%', height: '100%', overflowY: 'auto', overflowX: 'hidden',
      background: '#fff', fontFamily: 'var(--font-sans)',
      position: 'relative', WebkitOverflowScrolling: 'touch',
    }} data-invitation>
      <div style={{ height: 54 }}/>
      <CoverSection variant={variant}/>
      <Divider/>
      <GreetingSection variant={variant}/>
      <Divider/>
      <CalendarSection variant={variant}/>
      <Divider/>
      <GallerySection variant={variant}/>
      <Divider/>
      <LocationSection variant={variant}/>
      <Divider/>
      <AccountsSection variant={variant}/>
      <FooterSection variant={variant} onShare={handleShare}/>
      <div style={{ height: 34 }}/>
    </div>
  );
}

function Divider() {
  return <div style={{ height: 1, background: 'var(--slate-100)', margin: '0 28px' }}/>;
}

// ─── Main app — iPhone frame centered on a canvas backdrop
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#2277FF",
  "serifToggle": true,
  "corners": 8,
  "canvasBg": "#f0eee9"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    document.documentElement.style.setProperty('--blue-600', t.accent);
    document.documentElement.style.setProperty('--radius-md', `${t.corners}px`);
    document.documentElement.style.setProperty('--font-serif',
      t.serifToggle
        ? '"Cormorant Garamond", "Noto Serif KR", Georgia, serif'
        : 'var(--font-sans)');
    document.body.style.background = t.canvasBg;
  }, [t.accent, t.corners, t.serifToggle, t.canvasBg]);

  // Responsive: on narrow screens, go full bleed (no frame); otherwise show phone
  const [narrow, setNarrow] = React.useState(typeof window !== 'undefined' && window.innerWidth < 520);
  React.useEffect(() => {
    const on = () => setNarrow(window.innerWidth < 520);
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);

  if (narrow) {
    return (
      <>
        <div style={{ width: '100vw', height: '100vh', background: '#fff' }}>
          <Invitation variant="minimal"/>
        </div>
        <TweaksUI t={t} setTweak={setTweak}/>
      </>
    );
  }

  return (
    <>
      <div style={{
        width: '100vw', height: '100vh', display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        background: t.canvasBg, overflow: 'hidden',
      }}>
        <IOSDevice width={400} height={820} dark={false}>
          <Invitation variant="minimal"/>
        </IOSDevice>
      </div>
      <TweaksUI t={t} setTweak={setTweak}/>
    </>
  );
}

function TweaksUI({ t, setTweak }) {
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Typography" />
      <TweakToggle
        label="세리프 강조"
        value={t.serifToggle}
        onChange={(v) => setTweak('serifToggle', v)}
      />
      <TweakSection label="Accents" />
      <TweakColor
        label="포인트 색"
        value={t.accent}
        onChange={(v) => setTweak('accent', v)}
      />
      <TweakSlider
        label="모서리 둥글기"
        value={t.corners}
        min={0} max={16} step={1} unit="px"
        onChange={(v) => setTweak('corners', v)}
      />
      <TweakSection label="Background" />
      <TweakColor
        label="캔버스 배경"
        value={t.canvasBg}
        onChange={(v) => setTweak('canvasBg', v)}
      />
    </TweaksPanel>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
