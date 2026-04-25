// invitation-sections.jsx — the actual sections that make up the invitation
// Each takes { variant } where variant ∈ 'minimal' | 'mono' | 'warm'

// ─── 1. Cover
function CoverSection({ variant }) {
  const w = WEDDING;
  if (variant === 'mono') {
    return (
      <section style={{ padding: '36px 24px 48px', background: '#fff', color: '#111', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 13, letterSpacing: '0.3em', color: '#111', marginBottom: 20 }}>
          WE ARE GETTING MARRIED
        </div>
        <div style={{ width: 1, height: 40, background: '#111', margin: '0 auto 28px' }} />
        <div style={{
          fontFamily: 'var(--font-serif)', fontWeight: 300, fontSize: 64,
          lineHeight: 0.95, letterSpacing: '-0.02em',
        }}>
          Baek<br/>
          <span style={{ fontStyle: 'italic', fontWeight: 300 }}>&amp;</span><br/>
          Jihyun
        </div>
        <div style={{ margin: '28px auto 0', width: 1, height: 40, background: '#111' }} />
        <div style={{ marginTop: 20, fontSize: 12, letterSpacing: '0.24em', fontWeight: 500 }}>
          2026 · 06 · 20 · SAT · 18:30
        </div>
        <div style={{ marginTop: 36, borderTop: '1px solid #111', borderBottom: '1px solid #111', padding: '14px 0' }}>
          <Photo src={w.coverImage} ratio="4/5" rounded={false} style={{ filter: 'grayscale(1) contrast(1.05)' }} />
        </div>
      </section>
    );
  }
  if (variant === 'warm') {
    return (
      <section style={{ padding: '0 0 40px', background: '#FBF6EC' }}>
        <div style={{ position: 'relative', width: '100%', aspectRatio: '3/4', overflow: 'hidden' }}>
          <img src={w.coverImage} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.15) saturate(0.85)' }}/>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, rgba(251,246,236,0) 40%, rgba(251,246,236,0.9) 100%)',
          }}/>
        </div>
        <div style={{ textAlign: 'center', padding: '0 24px', marginTop: -24 }}>
          <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 14, letterSpacing: '0.2em', color: '#8a7a5e' }}>
            Save the date
          </div>
          <div style={{
            marginTop: 12, fontFamily: 'var(--font-serif)', fontWeight: 400,
            fontSize: 40, lineHeight: 1.15, letterSpacing: '0.02em', color: '#3d2f1a',
          }}>
            허 백<span style={{ fontStyle: 'italic', padding: '0 10px', color: '#a78a5c' }}>&amp;</span>안 지현
          </div>
          <div style={{ marginTop: 14, fontSize: 13, letterSpacing: '0.1em', color: '#6e5a3e' }}>
            2026. 06. 20. 토요일 오후 6시 30분<br/>
            라브르에드니아
          </div>
        </div>
      </section>
    );
  }
  // minimal
  return (
    <section style={{ padding: '32px 24px 44px', background: '#fff', textAlign: 'center' }}>
      <div style={{
        fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400,
        fontSize: 13, letterSpacing: '0.22em', color: 'var(--slate-500)',
      }}>
        the wedding of
      </div>
      <div style={{ width: '100%', marginTop: 22 }}>
        <Photo src={w.coverImage} ratio="3/4" rounded={false} style={{ borderRadius: 'var(--radius-md)' }} />
      </div>
      <div style={{
        marginTop: 28,
        fontFamily: 'var(--font-serif)', fontWeight: 400,
        fontSize: 36, lineHeight: 1.15, letterSpacing: '0.01em', color: 'var(--slate-950)',
      }}>
        Baek<span style={{ fontStyle: 'italic', fontWeight: 300, padding: '0 8px', color: 'var(--slate-500)' }}>&amp;</span>Jihyun
      </div>
      <div style={{ marginTop: 8, fontSize: 14, color: 'var(--slate-700)', letterSpacing: '0.04em' }}>
        허 백 <span style={{ color: 'var(--slate-400)', padding: '0 6px' }}>·</span> 안 지현
      </div>
      <div style={{ marginTop: 22, display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
        <div style={{ width: 12, height: 1, background: 'var(--slate-300)' }}/>
        <div style={{ fontSize: 13, letterSpacing: '0.16em', color: 'var(--slate-700)', fontWeight: 500 }}>
          2026. 06. 20. SAT · PM 6:30
        </div>
        <div style={{ fontSize: 12, color: 'var(--slate-500)' }}>라브르에드니아</div>
        <div style={{ width: 12, height: 1, background: 'var(--slate-300)' }}/>
      </div>
    </section>
  );
}

// ─── 2. Greeting — 모시는 글
function GreetingSection({ variant }) {
  const w = WEDDING;
  const bg = variant === 'warm' ? '#FBF6EC' : '#fff';
  const textColor = variant === 'warm' ? '#3d2f1a' : variant === 'mono' ? '#111' : 'var(--slate-800)';
  return (
    <section style={{ padding: '56px 28px', background: bg, textAlign: 'center' }}>
      <div style={{
        fontSize: 15, lineHeight: 2, color: textColor, fontWeight: 400,
        letterSpacing: '-0.01em',
        whiteSpace: 'pre-line',
      }}>
        {w.greeting.join('\n')}
      </div>
      <div style={{
        marginTop: 40, paddingTop: 28,
        borderTop: variant === 'mono' ? '1px solid #111' : '1px solid var(--slate-150)',
        display: 'flex', justifyContent: 'center', gap: 36,
        fontSize: 13, color: textColor, lineHeight: 1.8,
      }}>
        <div>
          <div style={{ color: variant === 'warm' ? '#8a7a5e' : 'var(--slate-500)', fontSize: 11, letterSpacing: '0.1em', marginBottom: 4 }}>GROOM</div>
          {w.groom.parents[0]} · {w.groom.parents[1]}<br/>
          <span style={{ fontWeight: 600 }}>의 장남 {w.groom.name}</span>
        </div>
        <div style={{ width: 1, background: variant === 'mono' ? '#111' : 'var(--slate-200)' }}/>
        <div>
          <div style={{ color: variant === 'warm' ? '#8a7a5e' : 'var(--slate-500)', fontSize: 11, letterSpacing: '0.1em', marginBottom: 4 }}>BRIDE</div>
          {w.bride.parents[0]} · {w.bride.parents[1]}<br/>
          <span style={{ fontWeight: 600 }}>의 장녀 {w.bride.name}</span>
        </div>
      </div>
    </section>
  );
}

// ─── 3. Calendar — 캘린더 + D-day countdown
function CalendarSection({ variant }) {
  const { dateKO, dateISO } = WEDDING;
  const { days, hours, minutes, seconds } = useCountdown(dateISO);
  const bg = variant === 'warm' ? '#FBF6EC' : '#fff';
  const textColor = variant === 'warm' ? '#3d2f1a' : variant === 'mono' ? '#111' : 'var(--slate-950)';
  const muted = variant === 'warm' ? '#8a7a5e' : variant === 'mono' ? 'rgba(17,17,17,0.55)' : 'var(--slate-500)';

  return (
    <section style={{ padding: '56px 28px', background: bg, textAlign: 'center' }}>
      <div style={{ color: textColor }}>
        <div style={{
          fontFamily: 'var(--font-serif)', fontSize: 32, fontWeight: 400,
          lineHeight: 1.1, letterSpacing: '0.04em',
          fontVariantNumeric: 'tabular-nums',
        }}>
          2026. 06. 20
        </div>
        <div style={{ marginTop: 8, fontSize: 13, color: muted, letterSpacing: '0.08em' }}>
          토요일 오후 6시 30분
        </div>
      </div>

      <div style={{ marginTop: 32, paddingTop: 24, borderTop: variant === 'mono' ? '1px solid #111' : '1px solid var(--slate-100)' }}>
        <MonthCalendar year={dateKO.y} month={dateKO.m} day={dateKO.d} variant={variant} />
      </div>

      <div style={{
        marginTop: 28, padding: '18px 14px',
        background: variant === 'warm' ? 'rgba(255,255,255,0.5)' : variant === 'mono' ? '#111' : 'var(--slate-50)',
        border: variant === 'mono' ? 'none' : 'none',
        borderRadius: variant === 'mono' ? 0 : 10,
        color: variant === 'mono' ? '#fff' : textColor,
      }}>
        <div style={{ fontSize: 11, letterSpacing: '0.2em', color: variant === 'mono' ? 'rgba(255,255,255,0.6)' : muted, marginBottom: 10 }}>
          결혼식까지
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', gap: 8, fontVariantNumeric: 'tabular-nums' }}>
          {[['DAYS', days], ['HOURS', hours], ['MIN', minutes], ['SEC', seconds]].map(([k, v]) => (
            <div key={k}>
              <div style={{
                fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 400,
                lineHeight: 1,
              }}>{String(v).padStart(2, '0')}</div>
              <div style={{ fontSize: 10, letterSpacing: '0.15em', marginTop: 6, opacity: 0.65 }}>{k}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 4. Gallery — 갤러리
function GallerySection({ variant }) {
  const w = WEDDING;
  const [lightbox, setLightbox] = React.useState(null);
  const bg = variant === 'warm' ? '#FBF6EC' : '#fff';
  const filter = variant === 'mono' ? 'grayscale(1) contrast(1.02)'
    : variant === 'warm' ? 'sepia(0.12) saturate(0.92)' : 'none';

  return (
    <section style={{ padding: '56px 0', background: bg }}>
      <div style={{
        padding: '0 20px',
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4,
      }}>
        {w.gallery.map((src, i) => (
          <div key={i} onClick={() => setLightbox(i)} style={{ cursor: 'pointer' }}>
            <Photo src={src} ratio="1/1" rounded={variant !== 'mono'} style={{ filter }} />
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: 20, fontSize: 12, color: 'var(--slate-500)', letterSpacing: '0.1em' }}>
        tap to view
      </div>

      {lightbox !== null && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.92)',
            zIndex: 50, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', padding: 20,
          }}
        >
          <img src={w.gallery[lightbox]} style={{ maxWidth: '100%', maxHeight: '70%', objectFit: 'contain' }}/>
          <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
            <button onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + w.gallery.length) % w.gallery.length); }}
                    style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: 'none', borderRadius: 999, width: 36, height: 36, cursor: 'pointer' }}>‹</button>
            <div style={{ color: '#fff', alignSelf: 'center', fontSize: 12, minWidth: 48, textAlign: 'center' }}>{lightbox + 1} / {w.gallery.length}</div>
            <button onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % w.gallery.length); }}
                    style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: 'none', borderRadius: 999, width: 36, height: 36, cursor: 'pointer' }}>›</button>
          </div>
        </div>
      )}
    </section>
  );
}

// ─── 5. Location — 오시는 길 + map + transit
function LocationSection({ variant }) {
  const w = WEDDING;
  const bg = variant === 'warm' ? '#FBF6EC' : '#fff';
  const textColor = variant === 'warm' ? '#3d2f1a' : variant === 'mono' ? '#111' : 'var(--slate-950)';
  const muted = variant === 'warm' ? '#8a7a5e' : variant === 'mono' ? 'rgba(17,17,17,0.6)' : 'var(--slate-600)';
  const accent = variant === 'mono' ? '#111' : variant === 'warm' ? '#a78a5c' : 'var(--blue-600)';

  const [addrCopied, setAddrCopied] = React.useState(false);
  const copyAddr = () => {
    navigator.clipboard?.writeText(w.venue.address);
    setAddrCopied(true);
    setTimeout(() => setAddrCopied(false), 1800);
  };

  const transitItems = [
    { icon: 'subway', label: '지하철', text: w.transit.subway },
    { icon: 'bus', label: '버스', text: w.transit.bus },
    { icon: 'car', label: '자가용', text: w.transit.car },
  ];

  return (
    <section style={{ padding: '56px 28px', background: bg }}>
      <div style={{ textAlign: 'center' }}>
        <SectionHead en="Location" ko="오시는 길" variant={variant} />
      </div>

      <div style={{ textAlign: 'center', marginTop: 28, color: textColor }}>
        <div style={{
          fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 24,
          letterSpacing: '0.02em',
        }}>{w.venue.name}</div>
        <div style={{ marginTop: 6, fontSize: 13, color: muted }}>{w.venue.address}</div>
      </div>

      <div style={{ marginTop: 24 }}>
        <SketchMap variant={variant} />
      </div>

      <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
        <button
          onClick={copyAddr}
          style={{
            flex: 1, height: 42,
            background: variant === 'mono' ? '#111' : '#fff',
            color: variant === 'mono' ? '#fff' : textColor,
            border: variant === 'mono' ? '1px solid #111' : '1px solid var(--slate-200)',
            borderRadius: variant === 'mono' ? 0 : 8,
            fontSize: 13, fontWeight: 500, cursor: 'pointer',
            fontFamily: 'inherit',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          }}
        >
          <Icon name="copy" size={14} />
          {addrCopied ? '복사됨' : '주소 복사'}
        </button>
        <button
          onClick={() => window.open('https://naver.me/5Ot0szic', '_blank', 'noopener,noreferrer')}
          style={{
            flex: 1, height: 42,
            background: accent, color: '#fff', border: 'none',
            borderRadius: variant === 'mono' ? 0 : 8,
            fontSize: 13, fontWeight: 500, cursor: 'pointer',
            fontFamily: 'inherit',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          }}
        >
          <Icon name="map" size={14} color="#fff"/>
          지도 앱에서 열기
        </button>
      </div>

      <div style={{ marginTop: 32 }}>
        <div style={{
          fontSize: 12, fontWeight: 600, letterSpacing: '0.16em',
          color: muted, marginBottom: 14,
        }}>TRANSPORTATION · 교통편 안내</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {transitItems.map(({ icon, label, text }) => (
            <div key={icon} style={{
              display: 'flex', gap: 14,
              padding: '14px 16px',
              background: variant === 'warm' ? 'rgba(255,255,255,0.5)' : 'var(--slate-50)',
              borderRadius: variant === 'mono' ? 0 : 10,
              border: variant === 'mono' ? '1px solid #111' : 'none',
            }}>
              <div style={{
                width: 32, height: 32, flexShrink: 0,
                borderRadius: variant === 'mono' ? 0 : 8,
                background: variant === 'mono' ? '#111' : '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: variant === 'mono' ? '#fff' : textColor,
              }}>
                <Icon name={icon} size={16} color={variant === 'mono' ? '#fff' : textColor}/>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: textColor, marginBottom: 2 }}>{label}</div>
                <div style={{ fontSize: 12, color: muted, lineHeight: 1.55, whiteSpace: 'pre-line' }}>{text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 6. Accounts — 계좌번호 안내
function AccountRow({ account, variant }) {
  const [copied, setCopied] = React.useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(account.number);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };
  const textColor = variant === 'warm' ? '#3d2f1a' : variant === 'mono' ? '#111' : 'var(--slate-950)';
  const muted = variant === 'warm' ? '#8a7a5e' : variant === 'mono' ? 'rgba(17,17,17,0.55)' : 'var(--slate-500)';
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12,
      padding: '14px 0',
      borderTop: variant === 'mono' ? '1px solid #111' : '1px solid var(--slate-100)',
    }}>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: textColor }}>{account.label}</div>
        <div style={{ fontSize: 12, color: muted, marginTop: 2, fontVariantNumeric: 'tabular-nums' }}>
          {account.bank} · {account.number}
        </div>
      </div>
      <button onClick={copy} style={{
        height: 32, padding: '0 12px',
        background: copied ? (variant === 'mono' ? '#111' : 'var(--slate-950)') : '#fff',
        color: copied ? '#fff' : textColor,
        border: variant === 'mono' ? '1px solid #111' : '1px solid var(--slate-200)',
        borderRadius: variant === 'mono' ? 0 : 6,
        fontSize: 12, fontWeight: 500, cursor: 'pointer',
        fontFamily: 'inherit',
        display: 'inline-flex', alignItems: 'center', gap: 4,
      }}>
        <Icon name="copy" size={12} color={copied ? '#fff' : textColor}/>
        {copied ? '복사됨' : '복사'}
      </button>
    </div>
  );
}

function AccountsSection({ variant }) {
  const w = WEDDING;
  const bg = variant === 'warm' ? '#FBF6EC' : '#fff';
  const muted = variant === 'warm' ? '#8a7a5e' : variant === 'mono' ? 'rgba(17,17,17,0.6)' : 'var(--slate-600)';
  const [open, setOpen] = React.useState({ groom: false, bride: false });

  const Toggle = ({ side, label, list }) => (
    <div style={{
      border: variant === 'mono' ? '1px solid #111' : '1px solid var(--slate-150)',
      borderRadius: variant === 'mono' ? 0 : 10,
      overflow: 'hidden',
      background: variant === 'warm' ? 'rgba(255,255,255,0.6)' : '#fff',
    }}>
      <button onClick={() => setOpen(o => ({ ...o, [side]: !o[side] }))} style={{
        width: '100%', height: 48, padding: '0 16px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'transparent', border: 'none', cursor: 'pointer',
        fontFamily: 'inherit', fontSize: 14, fontWeight: 500,
        color: variant === 'warm' ? '#3d2f1a' : variant === 'mono' ? '#111' : 'var(--slate-950)',
      }}>
        <span>{label}</span>
        <span style={{ transform: open[side] ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform .18s' }}>
          <Icon name="chevronDown" size={16} />
        </span>
      </button>
      {open[side] && (
        <div style={{ padding: '0 16px 12px' }}>
          {list.map((a, i) => <AccountRow key={i} account={a} variant={variant}/>)}
        </div>
      )}
    </div>
  );

  return (
    <section style={{ padding: '56px 28px', background: bg, textAlign: 'center' }}>
      <SectionHead en="With love" ko="마음 전하실 곳" variant={variant} />
      <div style={{ marginTop: 18, fontSize: 13, lineHeight: 1.8, color: muted }}>
        참석이 어려우신 분들을 위해 계좌번호를 안내드립니다.<br/>
        전해주시는 마음 감사히 간직하겠습니다.
      </div>
      <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 12, textAlign: 'left' }}>
        <Toggle side="groom" label="신랑측 계좌번호" list={w.accounts.groom} />
        <Toggle side="bride" label="신부측 계좌번호" list={w.accounts.bride} />
      </div>
    </section>
  );
}

// ─── 7. Footer — 감사의 말 + share
function FooterSection({ variant, onShare }) {
  const bg = variant === 'warm' ? '#F6EFE2' : variant === 'mono' ? '#111' : 'var(--slate-50)';
  const color = variant === 'mono' ? '#fff' : variant === 'warm' ? '#3d2f1a' : 'var(--slate-800)';
  const muted = variant === 'mono' ? 'rgba(255,255,255,0.6)' : variant === 'warm' ? '#8a7a5e' : 'var(--slate-500)';
  return (
    <section style={{ padding: '48px 28px 40px', background: bg, textAlign: 'center', color }}>
      <div style={{
        fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 20,
        letterSpacing: '0.04em',
      }}>Thank you</div>
      <div style={{ margin: '12px auto 0', width: 12, height: 1, background: muted }}/>
      <div style={{ marginTop: 18, fontSize: 13, lineHeight: 1.9, color: muted }}>
        소중한 발걸음으로<br/>
        저희의 시작을 축복해 주세요.
      </div>
      <div style={{ marginTop: 28, display: 'flex', gap: 8, justifyContent: 'center' }}>
        <button onClick={onShare} style={{
          height: 40, padding: '0 18px',
          background: variant === 'mono' ? '#fff' : '#fff',
          color: variant === 'mono' ? '#111' : 'var(--slate-950)',
          border: variant === 'mono' ? 'none' : '1px solid var(--slate-200)',
          borderRadius: variant === 'mono' ? 0 : 999,
          fontSize: 13, fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit',
          display: 'inline-flex', alignItems: 'center', gap: 6,
        }}>
          <Icon name="share" size={14} color={variant === 'mono' ? '#111' : 'currentColor'}/>
          청첩장 공유하기
        </button>
      </div>
      <div style={{ marginTop: 32, fontSize: 11, letterSpacing: '0.18em', color: muted }}>
        BAEK &amp; JIHYUN · 2026. 06. 20
      </div>
    </section>
  );
}

Object.assign(window, {
  CoverSection, GreetingSection, CalendarSection, GallerySection,
  LocationSection, AccountsSection, FooterSection,
});
