import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import imgImageVerido from "figma:asset/86b6fc0e0560e158897c31fb1abd4e929f4d3baa.png";

function Container1() {
  return <div className="absolute bg-gradient-to-b from-[#162f21] h-[563.375px] left-0 to-[#162f21] top-0 via-1/2 via-[#1a3826] w-[793.698px]" data-name="Container" />;
}

function Container3() {
  return <div className="absolute bg-white blur-[64px] left-[409.7px] rounded-[22369600px] size-[384px] top-0" data-name="Container" />;
}

function Container4() {
  return <div className="absolute bg-white blur-[64px] left-0 rounded-[22369600px] size-[320px] top-[243.38px]" data-name="Container" />;
}

function Container2() {
  return (
    <div className="absolute h-[563.375px] left-0 opacity-5 top-0 w-[793.698px]" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function ImageVerido() {
  return (
    <div className="h-[48px] relative shrink-0 w-[168px]" data-name="Image (Verido)">
      <ImageWithFallback alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageVerido} />
    </div>
  );
}

function Container8() {
  return <div className="bg-[#162f21] opacity-96 rounded-[22369600px] shrink-0 size-[8px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-0 not-italic text-[#162f21] text-[11px] top-[0.33px] tracking-[1.1px] uppercase">B2B Risk Intelligence</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#d4a574] h-[32.5px] relative rounded-[22369600px] shrink-0 w-[202.396px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
        <Container8 />
        <Text />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-center justify-between left-[64px] top-[48px] w-[665.698px]" data-name="Container">
      <ImageVerido />
      <Container7 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[171.594px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-[0.35px] not-italic text-[52px] text-white top-[-1px] w-[571px] whitespace-pre-wrap">
        <span className="leading-[57.2px]">{`How to know which retailers to `}</span>
        <span className="leading-[57.2px] text-[#d4a574]">trust</span>
        <span className="leading-[57.2px]">{` with stock and credit`}</span>
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[91.781px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[18px] text-[rgba(255,255,255,0.95)] top-0 whitespace-nowrap">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[30.6px] mb-0">{`Every distribution network faces the same problem: you need `}</p>
        <p className="mb-0">
          <span className="leading-[30.6px]">{`more `}</span>
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30.6px] not-italic text-[#d4a574]">retailers</span>
          <span className="font-['Inter:Semi_Bold_Italic',sans-serif] font-semibold italic leading-[30.6px] text-[#d4a574]">&nbsp;</span>
          <span className="leading-[30.6px]">to grow sales, but not every retailer should get</span>
        </p>
        <p className="leading-[30.6px]">credit.</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[139.781px] relative rounded-br-[14px] rounded-tr-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d4a574] border-l-4 border-solid inset-0 pointer-events-none rounded-br-[14px] rounded-tr-[14px]" />
      <div className="content-stretch flex flex-col items-start pl-[28px] pr-[24px] pt-[24px] relative size-full">
        <Paragraph />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[28px] h-[339.375px] items-start left-[64px] top-[160px] w-[620px]" data-name="Container">
      <Heading />
      <Container10 />
    </div>
  );
}

function Container11() {
  return <div className="absolute border-4 border-[rgba(212,165,116,0.2)] border-solid left-[601.7px] rounded-[22369600px] size-[128px] top-[435.38px]" data-name="Container" />;
}

function Container12() {
  return <div className="absolute border-4 border-[rgba(212,165,116,0.3)] border-solid left-[633.7px] rounded-[22369600px] size-[64px] top-[467.38px]" data-name="Container" />;
}

function Container5() {
  return (
    <div className="absolute h-[563.375px] left-0 top-0 w-[793.698px]" data-name="Container">
      <Container6 />
      <Container9 />
      <Container11 />
      <Container12 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="relative size-full" data-name="Container">
      <Container1 />
      <Container2 />
      <Container5 />
    </div>
  );
}