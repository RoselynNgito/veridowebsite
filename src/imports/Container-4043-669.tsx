import svgPaths from "./svg-yvxlo7ly5r";

function Container2() {
  return <div className="bg-[#d4a574] h-[2px] shrink-0 w-[64px]" data-name="Container" />;
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_4043_579)" id="Icon">
          <path d={svgPaths.p1b77670} id="Vector" stroke="var(--stroke-0, #162F21)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
          <path d={svgPaths.p2b8b9900} id="Vector_2" stroke="var(--stroke-0, #162F21)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
          <path d={svgPaths.p2aadfbc0} id="Vector_3" stroke="var(--stroke-0, #162F21)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
        </g>
        <defs>
          <clipPath id="clip0_4043_579">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container3() {
  return <div className="bg-[#d4a574] h-[2px] shrink-0 w-[64px]" data-name="Container" />;
}

function Container1() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[20px] items-center justify-center left-[48px] pr-[0.01px] top-[40px] w-[697.698px]" data-name="Container">
      <Container2 />
      <Icon />
      <Container3 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[86.396px] left-[48px] top-[84px] w-[697.698px]" data-name="Paragraph">
      <div className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[0] left-[calc(50%-0.33px)] not-italic text-[#162f21] text-[36px] text-center top-[-0.67px] tracking-[-0.9px] whitespace-nowrap">
        <p className="mb-0">
          <span className="leading-[43.2px]">{`Verido is a `}</span>
          <span className="font-['Inter:Black_Italic',sans-serif] font-black italic leading-[43.2px] text-[#d4a574]">monitoring and learning layer</span>
        </p>
        <p className="leading-[43.2px]">for market systems change.</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[19.333px] items-start left-[79.27px] top-[32px] w-[441.458px]" data-name="Text">
      <p className="font-['Inter:Semi_Bold_Italic',sans-serif] font-semibold italic leading-[28px] relative shrink-0 text-[#2d364a] text-[16px] text-center">without new forms, parallel reporting, or extra field visits.</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[56px] left-[96.84px] top-[190.4px] w-[600px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold_Italic',sans-serif] font-semibold italic leading-[28px] left-[300.45px] text-[#222c40] text-[16px] text-center top-[-1px]">It converts everyday transactions into live evidence —</p>
      <Text />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white relative size-full" data-name="Container">
      <Container1 />
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}