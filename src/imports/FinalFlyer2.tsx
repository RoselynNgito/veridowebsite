import svgPaths from "./svg-ehouz6zpns";
import imgImageVeridoBusinessOwnerView from "figma:asset/a8433f9d07848bbce11bec936986d3e94f9360a0.png";
import imgImageWithFallback from "figma:asset/86b6fc0e0560e158897c31fb1abd4e929f4d3baa.png";
import imgImageVeridoReportsDashboard from "figma:asset/3f5210083580e8bd52b5b4fdfa9813bffebe79d4.png";
import imgImageVeridoWebDashboard from "figma:asset/57b0513099a7bbb9591ecb805c2135fbf04b2ee6.png";

function Container1() {
  return <div className="absolute bg-[#d4a574] blur-[64px] left-[293.7px] opacity-20 rounded-[22369600px] size-[500px] top-0" data-name="Container" />;
}

function Container2() {
  return <div className="absolute bg-[#10b981] blur-[64px] left-0 opacity-15 rounded-[22369600px] size-[400px] top-[97.2px]" data-name="Container" />;
}

function Heading() {
  return (
    <div className="absolute h-[163.781px] left-0 top-0 w-[505.698px]" data-name="Heading 1">
      <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[0] left-0 not-italic text-[52px] text-white top-[-0.67px] tracking-[-1.3px] w-[470px] whitespace-pre-wrap">
        <span className="leading-[54.6px]">{`System change without evidence is just `}</span>
        <span className="font-['Inter:Black_Italic',sans-serif] italic leading-[54.6px] text-[#d4a574]">activity.</span>
      </p>
    </div>
  );
}

function Container6() {
  return <div className="absolute bg-gradient-to-b from-[#d4a574] h-[4px] left-0 to-[#10b981] top-[187.78px] w-[96px]" data-name="Container" />;
}

function Heading1() {
  return (
    <div className="absolute h-[29.25px] left-0 top-[215.78px] w-[505.698px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[29.25px] left-0 not-italic text-[18px] text-[rgba(255,255,255,0.95)] top-[0.33px]">Verido makes system behaviour visible in real time.</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[245.031px] left-0 top-[36.08px] w-[505.698px]" data-name="Container">
      <Heading />
      <Container6 />
      <Heading1 />
    </div>
  );
}

function Container8() {
  return <div className="absolute bg-[rgba(212,165,116,0.3)] blur-[64px] h-[384px] left-[-24px] rounded-[22369600px] top-[-24px] w-[192px]" data-name="Container" />;
}

function ImageVeridoBusinessOwnerView() {
  return (
    <div className="absolute h-[367px] left-0 rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.6),0px_25px_50px_0px_rgba(0,0,0,0.15)] top-0 w-[185px]" data-name="Image (Verido Business Owner View)">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[16px] size-full" src={imgImageVeridoBusinessOwnerView} />
      </div>
    </div>
  );
}

function Container12() {
  return <div className="bg-white opacity-80 rounded-[22369600px] shrink-0 size-[8px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[13.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[13.5px] left-0 not-italic text-[9px] text-white top-[0.33px] tracking-[0.45px] uppercase">LIVE</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[6px] h-[13.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Text />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-[#10b981] content-stretch flex flex-col h-[29.5px] items-start left-[110px] pb-[2px] pt-[8px] px-[14px] rounded-[22369600px] top-[-19px] w-[63.604px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[22369600px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <Container11 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[367px] left-0 top-0 w-[185px]" data-name="Container">
      <ImageVeridoBusinessOwnerView />
      <Container10 />
    </div>
  );
}

function Container7() {
  return (
    <div className="-translate-x-1/2 absolute h-[367px] left-[calc(50%+267.17px)] top-[-25px] w-[185px]" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute h-[48px] left-[-0.48px] top-[-72px] w-[168.385px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[317.198px] left-0 top-[72px] w-[697.698px]" data-name="Container">
      <Container5 />
      <Container7 />
      <ImageWithFallback />
    </div>
  );
}

function Container3() {
  return (
    <div className="-translate-x-1/2 absolute h-[426px] left-1/2 top-[36px] w-[716px]" data-name="Container">
      <Container4 />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-gradient-to-b from-[#162f21] h-[497.198px] overflow-clip relative shrink-0 to-[#2a5540] via-1/2 via-[#1f4230] w-full" data-name="Container">
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container17() {
  return <div className="bg-[#dc2626] h-[2px] shrink-0 w-[48px]" data-name="Container" />;
}

function Container18() {
  return <div className="bg-[#dc2626] size-[8.485px]" data-name="Container" />;
}

function Container19() {
  return <div className="bg-[#dc2626] h-[2px] shrink-0 w-[48px]" data-name="Container" />;
}

function Container16() {
  return (
    <div className="h-[6px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10.757px] items-center justify-center pr-[0.01px] relative size-full">
          <Container17 />
          <div className="flex items-center justify-center relative shrink-0 size-[12px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-45">
              <Container18 />
            </div>
          </div>
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[48px] left-[349.13px] not-italic text-[#162f21] text-[32px] text-center top-[-1px] tracking-[8px] uppercase">Programme Reality</p>
    </div>
  );
}

function Container21() {
  return <div className="bg-[#dc2626] h-[2px] shrink-0 w-[48px]" data-name="Container" />;
}

function Container22() {
  return <div className="bg-[#dc2626] size-[8.485px]" data-name="Container" />;
}

function Container23() {
  return <div className="bg-[#dc2626] h-[2px] shrink-0 w-[48px]" data-name="Container" />;
}

function Container20() {
  return (
    <div className="h-[6px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10.757px] items-center justify-center pr-[0.01px] relative size-full">
          <Container21 />
          <div className="flex items-center justify-center relative shrink-0 size-[12px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-45">
              <Container22 />
            </div>
          </div>
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[84px] items-start left-0 top-0 w-[697.698px]" data-name="Container">
      <Container16 />
      <Paragraph />
      <Container20 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[36.396px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[36.4px] left-[349.01px] not-italic text-[#162f21] text-[28px] text-center top-[-0.33px] tracking-[-0.7px]">Every programme wants sustainable outcomes.</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold_Italic',sans-serif] font-semibold italic leading-[24px] left-[348.6px] text-[#353e4e] text-[18px] text-center top-[-1px]">But in practice:</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[68.396px] items-start left-0 top-[116px] w-[697.698px]" data-name="Container">
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute bg-gradient-to-b border-[#dc2626] border-l-4 border-solid from-white h-[65px] left-[44.39px] rounded-[6px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] to-[#fef2f2] top-[375.18px] w-[608.927px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[0] left-[calc(50%-1.83px)] not-italic text-[#162f21] text-[20px] text-center top-[19px] tracking-[-0.5px]">
        <span className="leading-[25px]">{`Scale becomes cautious. `}</span>
        <span className="leading-[25px] text-[#dc2626]">Attribution becomes difficult.</span>
      </p>
    </div>
  );
}

function Container27() {
  return <div className="absolute bg-gradient-to-r from-[rgba(220,38,38,0.2)] h-[2px] left-0 to-[rgba(220,38,38,0.6)] top-[52px] via-1/2 via-[rgba(220,38,38,0.4)] w-[697.698px]" data-name="Container" />;
}

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[6.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[24px] left-0 not-italic text-[16px] text-white top-[-1px]">1</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-gradient-to-b from-[#dc2626] relative rounded-[22369600px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0 size-[44px] to-[#ef4444]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.01px] relative size-full">
        <Text1 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative size-full">
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[31.188px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[15.6px] left-[63.48px] not-italic text-[#162f21] text-[12px] text-center top-[0.67px] w-[111px] whitespace-pre-wrap">Data arrives late or incomplete</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] h-[123.188px] items-start left-0 pb-[2px] pt-[18px] px-[18px] rounded-[6px] top-0 w-[162.417px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7e4] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container30 />
      <Paragraph3 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[10.083px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[24px] left-0 not-italic text-[16px] text-white top-[-1px]">2</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-gradient-to-b from-[#dc2626] relative rounded-[22369600px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0 size-[44px] to-[#ef4444]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text2 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pr-[0.01px] relative size-full">
          <Container34 />
        </div>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[31.188px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[15.6px] left-[63.68px] not-italic text-[#162f21] text-[12px] text-center top-[0.67px] w-[123px] whitespace-pre-wrap">Monitoring happens after implementation</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] h-[123.188px] items-start left-[178.42px] pb-[2px] pt-[18px] px-[18px] rounded-[6px] top-0 w-[162.427px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7e4] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container33 />
      <Paragraph4 />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[10.333px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[24px] left-0 not-italic text-[16px] text-white top-[-1px]">3</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="bg-gradient-to-b from-[#dc2626] relative rounded-[22369600px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0 size-[44px] to-[#ef4444]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text3 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pr-[0.01px] relative size-full">
          <Container37 />
        </div>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[31.188px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[15.6px] left-[63.63px] not-italic text-[#162f21] text-[12px] text-center top-[0.67px] w-[123px] whitespace-pre-wrap">{`Learning relies on snapshots & surveys`}</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] h-[123.188px] items-start left-[356.84px] pb-[2px] pt-[18px] px-[18px] rounded-[6px] top-0 w-[162.427px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7e4] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container36 />
      <Paragraph5 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[10.823px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[24px] left-0 not-italic text-[16px] text-white top-[-1px]">4</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-gradient-to-b from-[#dc2626] relative rounded-[22369600px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0 size-[44px] to-[#ef4444]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.01px] relative size-full">
        <Text4 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pr-[0.01px] relative size-full">
          <Container40 />
        </div>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[46.781px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[15.6px] left-[63.68px] not-italic text-[#162f21] text-[12px] text-center top-[0.67px] w-[105px] whitespace-pre-wrap">Evidence is retrospective, not live</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] h-[123px] items-start left-[535.52px] pb-[2px] pt-[18px] px-[18px] rounded-[6px] top-[0.41px] w-[162px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7e4] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container39 />
      <Paragraph6 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[138.781px] left-0 top-0 w-[697.698px]" data-name="Container">
      <Container29 />
      <Container32 />
      <Container35 />
      <Container38 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[138.781px] left-0 top-[208.4px] w-[697.698px]" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[440.177px] relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container24 />
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-gradient-to-b from-[#fafbfa] h-[512.177px] relative shrink-0 to-white w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[32px] px-[48px] relative size-full">
        <Container14 />
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[42px] left-0 top-[18px] w-[697.698px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[42px] left-[348.93px] not-italic text-[#162f21] text-[28px] text-center top-0 tracking-[4.2px] uppercase">The Real Issue</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute h-[60px] left-0 top-0 w-[697.698px]" data-name="Container">
      <Paragraph7 />
    </div>
  );
}

function Container45() {
  return <div className="absolute bg-[#162f21] h-[2px] left-[296.84px] top-0 w-[64px]" data-name="Container" />;
}

function Container46() {
  return <div className="absolute bg-[#d4a574] h-[2px] left-[368.84px] top-0 w-[32px]" data-name="Container" />;
}

function Container44() {
  return (
    <div className="absolute h-[2px] left-0 top-[9.63px] w-[697.698px]" data-name="Container">
      <Container45 />
      <Container46 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[26px] left-[48px] top-[20px] w-[540.333px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-[calc(50%-0.32px)] not-italic text-[20px] text-center text-white top-[-0.33px]">
        <span className="leading-[26px]">{`Without it, support and finance become `}</span>
        <span className="font-['Inter:Bold_Italic',sans-serif] italic leading-[26px] text-[#d4a574]">trial-and-error.</span>
      </p>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute bg-gradient-to-b border-[#d4a574] border-l-4 border-solid from-[#162f21] h-[66px] left-[28.68px] rounded-[6px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] to-[#6b5d47] top-[343.4px] via-1/2 via-[#223a28] w-[640.333px]" data-name="Container">
      <Paragraph8 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute font-['Inter:Black',sans-serif] font-black h-[38.396px] leading-[19.2px] left-0 not-italic text-[#dc2626] text-[16px] top-0 tracking-[3.2px] uppercase w-[284.844px]" data-name="Paragraph">
      <p className="absolute left-0 top-[-0.67px]">What programmes</p>
      <p className="absolute left-0 top-[18.53px]">often hear</p>
    </div>
  );
}

function Container51() {
  return <div className="absolute bg-[#dc2626] h-[3px] left-0 top-[50.4px] w-[64px]" data-name="Container" />;
}

function Container50() {
  return (
    <div className="h-[53.396px] relative shrink-0 w-full" data-name="Container">
      <Paragraph9 />
      <Container51 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold_Italic',sans-serif] font-bold italic leading-[26px] left-0 text-[#4b5563] text-[20px] top-[-0.33px]">{`"MSMEs are not bankable."`}</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex flex-col gap-[24px] h-[219.396px] items-start left-0 pt-[32px] px-[32px] top-0 w-[348.844px]" data-name="Container">
      <Container50 />
      <Paragraph10 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute font-['Inter:Black',sans-serif] font-black h-[38.396px] leading-[19.2px] left-0 not-italic text-[#d4a574] text-[16px] top-0 tracking-[3.2px] uppercase w-[284.854px]" data-name="Paragraph">
      <p className="absolute left-0 top-[-0.67px]">{`What's`}</p>
      <p className="absolute left-0 top-[18.53px]">actually missing</p>
    </div>
  );
}

function Container54() {
  return <div className="absolute bg-[#d4a574] h-[3px] left-0 top-[50.4px] w-[64px]" data-name="Container" />;
}

function Container53() {
  return (
    <div className="h-[53.396px] relative shrink-0 w-full" data-name="Container">
      <Paragraph11 />
      <Container54 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[78px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[26px] left-0 not-italic text-[20px] text-white top-[-0.33px] w-[231px] whitespace-pre-wrap">Real-time visibility into partner and beneficiary behaviour.</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute bg-[#162f21] content-stretch flex flex-col gap-[24px] h-[219.396px] items-start left-[348.84px] pt-[32px] px-[32px] top-0 w-[348.854px]" data-name="Container">
      <Container53 />
      <Paragraph12 />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute h-[219.396px] left-0 top-[92px] w-[697.698px]" data-name="Container">
      <Container49 />
      <Container52 />
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[409.396px] relative shrink-0 w-full" data-name="Container">
      <Container43 />
      <Container44 />
      <Container47 />
      <Container48 />
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-gradient-to-b from-[#f9fafb] h-[489.396px] relative shrink-0 to-[#f3f4f6] via-1/2 via-white w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[40px] px-[48px] relative size-full">
        <Container42 />
      </div>
    </div>
  );
}

function Container57() {
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

function Container58() {
  return <div className="bg-[#d4a574] h-[2px] shrink-0 w-[64px]" data-name="Container" />;
}

function Container56() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[20px] items-center justify-center left-[48px] pr-[0.01px] top-[40px] w-[697.698px]" data-name="Container">
      <Container57 />
      <Icon />
      <Container58 />
    </div>
  );
}

function Paragraph13() {
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

function Text5() {
  return (
    <div className="absolute content-stretch flex h-[19.333px] items-start left-[79.27px] top-[32px] w-[441.458px]" data-name="Text">
      <p className="font-['Inter:Semi_Bold_Italic',sans-serif] font-semibold italic leading-[28px] relative shrink-0 text-[#2d364a] text-[16px] text-center">without new forms, parallel reporting, or extra field visits.</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute h-[56px] left-[96.84px] top-[190.4px] w-[600px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold_Italic',sans-serif] font-semibold italic leading-[28px] left-[300.45px] text-[#222c40] text-[16px] text-center top-[-1px]">It converts everyday transactions into live evidence —</p>
      <Text5 />
    </div>
  );
}

function Container55() {
  return (
    <div className="bg-white h-[286.396px] relative shrink-0 w-full" data-name="Container">
      <Container56 />
      <Paragraph13 />
      <Paragraph14 />
    </div>
  );
}

function Container63() {
  return <div className="bg-gradient-to-b from-[rgba(0,0,0,0)] h-[2px] shrink-0 to-[rgba(0,0,0,0)] via-1/2 via-[#10b981] w-[48px]" data-name="Container" />;
}

function Container64() {
  return <div className="bg-[#10b981] rounded-[22369600px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container65() {
  return <div className="bg-gradient-to-b from-[rgba(0,0,0,0)] h-[2px] shrink-0 to-[rgba(0,0,0,0)] via-1/2 via-[#10b981] w-[48px]" data-name="Container" />;
}

function Container62() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[8px] items-center justify-center left-0 pr-[0.01px] top-0 w-[697.698px]" data-name="Container">
      <Container63 />
      <Container64 />
      <Container65 />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute h-[66px] left-[23.84px] top-[20px] w-[650px]" data-name="Paragraph">
      <div className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[33px] left-[calc(50%+0.16px)] not-italic text-[#162f21] text-[26px] text-center top-[-0.33px] tracking-[6.16px] uppercase whitespace-nowrap">
        <p className="mb-0">Monitoring Evaluation Learning</p>
        <p>VALUE</p>
      </div>
    </div>
  );
}

function Container67() {
  return <div className="bg-gradient-to-b from-[rgba(0,0,0,0)] h-[2px] shrink-0 to-[rgba(0,0,0,0)] via-1/2 via-[#10b981] w-[48px]" data-name="Container" />;
}

function Container68() {
  return <div className="bg-[#10b981] rounded-[22369600px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container69() {
  return <div className="bg-gradient-to-b from-[rgba(0,0,0,0)] h-[2px] shrink-0 to-[rgba(0,0,0,0)] via-1/2 via-[#10b981] w-[48px]" data-name="Container" />;
}

function Container66() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[8px] items-center justify-center left-0 pr-[0.01px] top-[98px] w-[697.698px]" data-name="Container">
      <Container67 />
      <Container68 />
      <Container69 />
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute h-[106px] left-0 top-0 w-[697.698px]" data-name="Container">
      <Container62 />
      <Paragraph15 />
      <Container66 />
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute content-stretch flex h-[29.333px] items-start left-[345.54px] top-[0.67px] w-[143.125px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[31.2px] not-italic relative shrink-0 text-[#10b981] text-[24px] text-center tracking-[-0.6px]">programmes</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="absolute h-[31.198px] left-0 top-[138px] w-[697.698px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[31.2px] left-[273.61px] not-italic text-[#162f21] text-[24px] text-center top-[-0.33px] tracking-[-0.6px]">Verido gives</p>
      <Text6 />
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[31.2px] left-[492.67px] not-italic text-[#162f21] text-[24px] text-center top-[-0.33px] tracking-[-0.6px]">:</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_4043_565)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
          <path d="M10 5V10L13.3333 11.6667" id="Vector_2" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
        </g>
        <defs>
          <clipPath id="clip0_4043_565">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container73() {
  return (
    <div className="bg-[rgba(16,185,129,0.1)] relative rounded-[22369600px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="flex-[1_0_0] h-[37.792px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[18.9px] left-0 not-italic text-[#162f21] text-[14px] top-[-0.33px] w-[242px] whitespace-pre-wrap">Real-time transaction data from the field</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex gap-[12px] h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Container73 />
      <Paragraph17 />
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[84px] items-start left-0 pb-[2px] pt-[22px] px-[22px] rounded-[6px] top-0 w-[340.844px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7e4] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container72 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3c797180} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
          <path d={svgPaths.p3ac0b600} id="Vector_2" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
        </g>
      </svg>
    </div>
  );
}

function Container76() {
  return (
    <div className="bg-[rgba(16,185,129,0.1)] relative rounded-[22369600px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[37.792px] relative shrink-0 w-[244.854px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[18.9px] left-0 not-italic text-[#162f21] text-[14px] top-[-0.33px] w-[226px] whitespace-pre-wrap">Behavioural trends over time, not one-off surveys</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex gap-[12px] h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Container76 />
      <Paragraph18 />
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[84px] items-start left-[356.84px] pb-[2px] pt-[22px] px-[22px] rounded-[6px] top-0 w-[340.854px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7e4] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container75 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_4043_540)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
          <path d={svgPaths.p240d7000} id="Vector_2" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
          <path d={svgPaths.p25499600} id="Vector_3" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
        </g>
        <defs>
          <clipPath id="clip0_4043_540">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container79() {
  return (
    <div className="bg-[rgba(16,185,129,0.1)] relative rounded-[22369600px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="flex-[1_0_0] h-[37.792px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[18.9px] left-0 not-italic text-[#162f21] text-[14px] top-[-0.33px] w-[234px] whitespace-pre-wrap">Early signals of what is working — and what is not</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex gap-[12px] h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Container79 />
      <Paragraph19 />
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[84px] items-start left-0 pb-[2px] pt-[22px] px-[22px] rounded-[6px] top-[100px] w-[340.844px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7e4] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container78 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p140c1100} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
          <path d="M15 14.1667V7.5" id="Vector_2" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
          <path d="M10.8333 14.1667V4.16667" id="Vector_3" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
          <path d="M6.66667 14.1667V11.6667" id="Vector_4" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
        </g>
      </svg>
    </div>
  );
}

function Container82() {
  return (
    <div className="bg-[rgba(16,185,129,0.1)] relative rounded-[22369600px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[37.792px] relative shrink-0 w-[244.854px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[18.9px] left-0 not-italic text-[#162f21] text-[14px] top-[-0.33px] w-[212px] whitespace-pre-wrap">Evidence of impact suitable for evaluation and learning</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex gap-[12px] h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Container82 />
      <Paragraph20 />
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[84px] items-start left-[356.84px] pb-[2px] pt-[22px] px-[22px] rounded-[6px] top-[100px] w-[340.854px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7e4] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container81 />
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute h-[184px] left-0 top-[193.2px] w-[697.698px]" data-name="Container">
      <Container71 />
      <Container74 />
      <Container77 />
      <Container80 />
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute bg-gradient-to-b border-[#10b981] border-l-4 border-solid from-white h-[59px] left-[105.03px] rounded-[6px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] to-[#f0fdf4] top-[401.2px] w-[487.625px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-[calc(50%-1.82px)] not-italic text-[#162f21] text-[18px] text-center top-[16px]">
        <span className="leading-[27px]">{`Behaviour is captured `}</span>
        <span className="font-['Inter:Bold_Italic',sans-serif] italic leading-[27px] text-[#10b981]">as business happens.</span>
      </p>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[460.198px] relative shrink-0 w-full" data-name="Container">
      <Container61 />
      <Paragraph16 />
      <Container70 />
      <Container83 />
    </div>
  );
}

function Container59() {
  return (
    <div className="bg-gradient-to-b from-[#f0fdf4] h-[532.198px] relative shrink-0 to-white w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[32px] px-[48px] relative size-full">
        <Container60 />
      </div>
    </div>
  );
}

function Container88() {
  return <div className="bg-[#d4a574] h-[2px] shrink-0 w-[48px]" data-name="Container" />;
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M5 2.5V12.5" id="Vector" stroke="var(--stroke-0, #D4A574)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
          <path d={svgPaths.p3a3cf580} id="Vector_2" stroke="var(--stroke-0, #D4A574)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
          <path d={svgPaths.p34c9bb80} id="Vector_3" stroke="var(--stroke-0, #D4A574)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
          <path d={svgPaths.p13cf9c00} id="Vector_4" stroke="var(--stroke-0, #D4A574)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
        </g>
      </svg>
    </div>
  );
}

function Container89() {
  return <div className="bg-[#d4a574] h-[2px] shrink-0 w-[48px]" data-name="Container" />;
}

function Container87() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center pr-[0.01px] relative size-full">
          <Container88 />
          <Icon5 />
          <Container89 />
        </div>
      </div>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[48px] left-[349.69px] not-italic text-[#162f21] text-[32px] text-center top-[-1px] tracking-[8px] uppercase">Systemic Change Logic</p>
    </div>
  );
}

function Container91() {
  return <div className="bg-[#d4a574] h-[2px] shrink-0 w-[48px]" data-name="Container" />;
}

function Container92() {
  return <div className="bg-[#d4a574] size-[8.485px]" data-name="Container" />;
}

function Container93() {
  return <div className="bg-[#d4a574] h-[2px] shrink-0 w-[48px]" data-name="Container" />;
}

function Container90() {
  return (
    <div className="h-[6px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10.757px] items-center justify-center pr-[0.01px] relative size-full">
          <Container91 />
          <div className="flex items-center justify-center relative shrink-0 size-[12px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-45">
              <Container92 />
            </div>
          </div>
          <Container93 />
        </div>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[98px] items-start left-0 top-0 w-[697.698px]" data-name="Container">
      <Container87 />
      <Paragraph21 />
      <Container90 />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute content-stretch flex h-[29.333px] items-start left-[364.4px] top-[-0.67px] w-[160.375px]" data-name="Text">
      <p className="font-['Inter:Bold_Italic',sans-serif] font-bold italic leading-[28.8px] relative shrink-0 text-[#d4a574] text-[24px] text-center tracking-[-0.6px]">system visible</p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="absolute h-[28.792px] left-0 top-[130px] w-[697.698px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[28.8px] left-[264.5px] not-italic text-[#162f21] text-[24px] text-center top-[-0.67px] tracking-[-0.6px]">Verido makes the</p>
      <Text7 />
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[28.8px] left-[528.77px] not-italic text-[#162f21] text-[24px] text-center top-[-0.67px] tracking-[-0.6px]">:</p>
    </div>
  );
}

function Container96() {
  return <div className="absolute bg-gradient-to-b from-[#162f21] h-[207.583px] left-[21.52px] to-[#10b981] top-[30px] via-1/2 via-[#d4a574] w-[3px]" data-name="Container" />;
}

function Paragraph23() {
  return (
    <div className="h-[18.896px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[18.9px] left-0 not-italic text-[#162f21] text-[14px] top-[-0.33px]">How partner practices change</p>
    </div>
  );
}

function Container98() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[46.896px] items-start left-[64px] pb-[2px] pt-[14px] px-[18px] rounded-[6px] top-[8px] w-[441.698px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7e4] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Paragraph23 />
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[6.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[24px] left-0 not-italic text-[16px] text-white top-[-1px]">1</p>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex from-[#6ee7b7] items-center justify-center left-0 pl-[2px] pr-[2.01px] py-[2px] rounded-[22369600px] size-[48px] to-[#10b981] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[22369600px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)]" />
      <Text8 />
    </div>
  );
}

function CascadeStep() {
  return (
    <div className="h-[54.896px] relative shrink-0 w-full" data-name="CascadeStep">
      <Container98 />
      <Container99 />
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[18.896px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[18.9px] left-0 not-italic text-[#162f21] text-[14px] top-[-0.33px]">How those changes affect agents</p>
    </div>
  );
}

function Container100() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[46.896px] items-start left-[64px] pb-[2px] pt-[14px] px-[18px] rounded-[6px] top-[8px] w-[441.698px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7e4] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Paragraph24 />
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[10.083px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[24px] left-0 not-italic text-[16px] text-white top-[-1px]">2</p>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex from-[#6ee7b7] items-center justify-center left-0 p-[2px] rounded-[22369600px] size-[48px] to-[#10b981] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[22369600px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)]" />
      <Text9 />
    </div>
  );
}

function CascadeStep1() {
  return (
    <div className="h-[54.896px] relative shrink-0 w-full" data-name="CascadeStep">
      <Container100 />
      <Container101 />
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[18.896px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[18.9px] left-0 not-italic text-[#162f21] text-[14px] top-[-0.33px]">How agent behaviour affects beneficiaries</p>
    </div>
  );
}

function Container102() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[46.896px] items-start left-[64px] pb-[2px] pt-[14px] px-[18px] rounded-[6px] top-[8px] w-[441.698px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7e4] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Paragraph25 />
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[24px] relative shrink-0 w-[10.333px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[24px] left-0 not-italic text-[16px] text-white top-[-1px]">3</p>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex from-[#6ee7b7] items-center justify-center left-0 p-[2px] rounded-[22369600px] size-[48px] to-[#10b981] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[22369600px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)]" />
      <Text10 />
    </div>
  );
}

function CascadeStep2() {
  return (
    <div className="h-[54.896px] relative shrink-0 w-full" data-name="CascadeStep">
      <Container102 />
      <Container103 />
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[18.896px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[18.9px] left-0 not-italic text-[#162f21] text-[14px] top-[-0.33px]">How beneficiary behaviour affects outcomes</p>
    </div>
  );
}

function Container104() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[46.896px] items-start left-[64px] pb-[2px] pt-[14px] px-[18px] rounded-[6px] top-[8px] w-[441.698px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7e4] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Paragraph26 />
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[24px] relative shrink-0 w-[10.823px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[24px] left-0 not-italic text-[16px] text-white top-[-1px]">4</p>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex from-[#6ee7b7] items-center justify-center left-0 pl-[2px] pr-[2.01px] py-[2px] rounded-[22369600px] size-[48px] to-[#10b981] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[22369600px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)]" />
      <Text11 />
    </div>
  );
}

function CascadeStep3() {
  return (
    <div className="h-[54.896px] relative shrink-0 w-full" data-name="CascadeStep">
      <Container104 />
      <Container105 />
    </div>
  );
}

function Container97() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[267.583px] items-start left-0 top-0 w-[505.698px]" data-name="Container">
      <CascadeStep />
      <CascadeStep1 />
      <CascadeStep2 />
      <CascadeStep3 />
    </div>
  );
}

function Container95() {
  return (
    <div className="absolute h-[267.583px] left-0 top-[24.3px] w-[505.698px]" data-name="Container">
      <Container96 />
      <Container97 />
    </div>
  );
}

function Container107() {
  return <div className="absolute bg-[rgba(16,185,129,0.15)] blur-[64px] h-[384px] left-[-16px] rounded-[22369600px] top-[-16px] w-[192px]" data-name="Container" />;
}

function ImageVeridoReportsDashboard() {
  return (
    <div className="h-[314.854px] relative shrink-0 w-full" data-name="Image (Verido Reports Dashboard)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageVeridoReportsDashboard} />
    </div>
  );
}

function Container108() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[316.188px] left-0 rounded-[16px] top-0 w-[160px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[0.667px] relative rounded-[inherit] size-full">
        <ImageVeridoReportsDashboard />
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7e4] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_20px_40px_-10px_rgba(0,0,0,0.3)]" />
    </div>
  );
}

function Container106() {
  return (
    <div className="absolute h-[316.188px] left-[537.7px] top-0 w-[160px]" data-name="Container">
      <Container107 />
      <Container108 />
    </div>
  );
}

function Container94() {
  return (
    <div className="absolute h-[316.188px] left-0 top-[190.79px] w-[697.698px]" data-name="Container">
      <Container95 />
      <Container106 />
    </div>
  );
}

function Container109() {
  return (
    <div className="absolute bg-gradient-to-b border-[#d4a574] border-l-4 border-solid from-white h-[92px] left-[47.47px] rounded-[6px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] to-[#fffbf5] top-[530.98px] w-[602.76px]" data-name="Container">
      <div className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-[calc(50%-1.83px)] not-italic text-[#162f21] text-[20px] text-center top-[19.67px] whitespace-nowrap">
        <p className="mb-0">
          <span className="leading-[26px]">{`This allows programmes to track `}</span>
          <span className="font-['Inter:Bold_Italic',sans-serif] font-bold italic leading-[26px] text-[#d4a574]">change pathways,</span>
        </p>
        <p className="leading-[26px]">not assumptions.</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="h-[622.979px] relative shrink-0 w-full" data-name="Container">
      <Container86 />
      <Paragraph22 />
      <Container94 />
      <Container109 />
    </div>
  );
}

function Container84() {
  return (
    <div className="bg-gradient-to-b from-[#fafbfa] h-[702.979px] relative shrink-0 to-white w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[40px] px-[48px] relative size-full">
        <Container85 />
      </div>
    </div>
  );
}

function Container114() {
  return <div className="bg-[#d4a574] h-[2px] shrink-0 w-[48px]" data-name="Container" />;
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p25397b80} id="Vector" stroke="var(--stroke-0, #D4A574)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
          <path d={svgPaths.p2c4f400} id="Vector_2" stroke="var(--stroke-0, #D4A574)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
          <path d={svgPaths.p16b3b0c0} id="Vector_3" stroke="var(--stroke-0, #D4A574)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
          <path d={svgPaths.p1fe14e00} id="Vector_4" stroke="var(--stroke-0, #D4A574)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
        </g>
      </svg>
    </div>
  );
}

function Container115() {
  return <div className="bg-[#d4a574] h-[2px] shrink-0 w-[48px]" data-name="Container" />;
}

function Container113() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center pr-[0.01px] relative size-full">
          <Container114 />
          <Icon6 />
          <Container115 />
        </div>
      </div>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[48px] left-[349.43px] not-italic text-[#162f21] text-[32px] text-center top-[-1px] tracking-[8px] uppercase">{`Partners & Sustainability`}</p>
    </div>
  );
}

function Container117() {
  return <div className="bg-[#d4a574] h-[2px] shrink-0 w-[48px]" data-name="Container" />;
}

function Container118() {
  return <div className="bg-[#d4a574] rounded-[22369600px] shrink-0 size-[6px]" data-name="Container" />;
}

function Container119() {
  return <div className="bg-[#d4a574] h-[2px] shrink-0 w-[48px]" data-name="Container" />;
}

function Container116() {
  return (
    <div className="h-[6px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center pr-[0.01px] relative size-full">
          <Container117 />
          <Container118 />
          <Container119 />
        </div>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[124px] items-start left-0 pb-[2px] top-0 w-[697.698px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(212,165,116,0.3)] border-b-2 border-solid inset-0 pointer-events-none" />
      <Container113 />
      <Paragraph27 />
      <Container116 />
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[21px] left-0 not-italic text-[#162f21] text-[14px] top-0">Banks</p>
    </div>
  );
}

function Container121() {
  return (
    <div className="bg-white h-[49px] relative rounded-[6px] shrink-0 w-[94.073px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7e4] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[2px] pt-[14px] px-[26px] relative size-full">
        <Paragraph28 />
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="h-[36px] relative shrink-0 w-[16.292px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[36px] left-0 not-italic text-[#d4a574] text-[24px] top-[-0.67px]">+</p>
      </div>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[21px] left-0 not-italic text-[#162f21] text-[14px] top-0">MFBs</p>
    </div>
  );
}

function Container123() {
  return (
    <div className="bg-white h-[49px] relative rounded-[6px] shrink-0 w-[90.365px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7e4] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[2px] pt-[14px] px-[26px] relative size-full">
        <Paragraph29 />
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="h-[36px] relative shrink-0 w-[16.292px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[36px] left-0 not-italic text-[#d4a574] text-[24px] top-[-0.67px]">+</p>
      </div>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[21px] left-0 not-italic text-[#162f21] text-[14px] top-0">Companies</p>
    </div>
  );
}

function Container125() {
  return (
    <div className="bg-white h-[49px] relative rounded-[6px] shrink-0 w-[129.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7e4] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[2px] pt-[14px] px-[26px] relative size-full">
        <Paragraph30 />
      </div>
    </div>
  );
}

function Container120() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[49px] items-center justify-center left-0 pr-[0.01px] top-[220.4px] w-[697.698px]" data-name="Container">
      <Container121 />
      <Container122 />
      <Container123 />
      <Container124 />
      <Container125 />
    </div>
  );
}

function Container127() {
  return <div className="bg-gradient-to-b from-[rgba(0,0,0,0)] h-px shrink-0 to-[#d4a574] w-[64px]" data-name="Container" />;
}

function Paragraph31() {
  return (
    <div className="h-[51.188px] relative shrink-0 w-[351.979px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid font-['Inter:Bold',sans-serif] font-bold leading-[25.6px] not-italic relative size-full text-[#162f21] text-[16px] text-center">
        <p className="-translate-x-1/2 absolute left-[176.35px] top-[-1.33px]">— used by banks, MFBs, and companies —</p>
        <p className="-translate-x-1/2 absolute left-[176.5px] top-[24.26px]">continuing beyond the life of the programme.</p>
      </div>
    </div>
  );
}

function Container128() {
  return <div className="bg-gradient-to-b from-[rgba(0,0,0,0)] h-px shrink-0 to-[#d4a574] w-[64px]" data-name="Container" />;
}

function Container126() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[51.188px] items-center left-[96.85px] top-[293.4px] w-[503.979px]" data-name="Container">
      <Container127 />
      <Paragraph31 />
      <Container128 />
    </div>
  );
}

function Container129() {
  return (
    <div className="-translate-x-1/2 absolute bg-gradient-to-b border-[#d4a574] border-l-4 border-solid from-white h-[69px] left-[calc(50%-0.48px)] rounded-[6px] shadow-[3px_0px_4px_0px_rgba(0,0,0,0.25),0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] to-[#fffbf5] top-[376.66px] w-[698px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold_Italic',sans-serif] font-bold italic leading-[28.8px] left-[calc(50%-1.98px)] text-[#d4a574] text-[18px] text-center top-[20.07px] w-[641px] whitespace-pre-wrap">Linking partner behaviour change to beneficiary outcomes over time.</p>
    </div>
  );
}

function Container111() {
  return (
    <div className="h-[474.167px] relative shrink-0 w-full" data-name="Container">
      <Container112 />
      <p className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[0] left-[calc(50%+0.5px)] not-italic text-[#162f21] text-[28px] text-center top-[155.67px] tracking-[-0.7px]">
        <span className="leading-[36.4px]">{`Verido becomes `}</span>
        <span className="leading-[36.4px] text-[#d4a574]">shared infrastructure</span>
      </p>
      <Container120 />
      <Container126 />
      <Container129 />
    </div>
  );
}

function Container110() {
  return (
    <div className="bg-gradient-to-b from-[#fffbf5] h-[554.167px] relative shrink-0 to-white w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[40px] px-[48px] relative size-full">
        <Container111 />
      </div>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="absolute h-[15px] left-[29.61px] opacity-90 top-[289.54px] w-[80.76px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-0 not-italic text-[#d4a574] text-[10px] top-[-0.33px] tracking-[0.5px] uppercase">Mobile Ready</p>
    </div>
  );
}

function Container137() {
  return <div className="absolute bg-[rgba(212,165,116,0.2)] blur-[64px] h-[288px] left-[-16px] rounded-[24px] top-[-16px] w-[160px]" data-name="Container" />;
}

function ImageVeridoMobileApp() {
  return (
    <div className="absolute h-[277.542px] left-0 rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.5),0px_25px_50px_0px_rgba(0,0,0,0.15)] top-0 w-[140px]" data-name="Image (Verido Mobile App)">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[16px] size-full" src={imgImageVeridoBusinessOwnerView} />
      </div>
    </div>
  );
}

function Container136() {
  return (
    <div className="absolute h-[277.542px] left-0 top-0 w-[140px]" data-name="Container">
      <Container137 />
      <ImageVeridoMobileApp />
    </div>
  );
}

function Container135() {
  return (
    <div className="absolute h-[304.542px] left-[32.84px] top-0 w-[140px]" data-name="Container">
      <Paragraph32 />
      <Container136 />
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="absolute h-[15px] left-[186.85px] opacity-90 top-[216.86px] w-[86.281px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-0 not-italic text-[#d4a574] text-[10px] top-[-0.33px] tracking-[0.5px] uppercase">Web Platform</p>
    </div>
  );
}

function Container140() {
  return <div className="absolute bg-[rgba(16,185,129,0.15)] blur-[64px] h-[256px] left-[-16px] rounded-[10px] top-[-16px] w-[480px]" data-name="Container" />;
}

function ImageVeridoWebDashboard() {
  return (
    <div className="h-[203.531px] relative shadow-[0px_25px_50px_0px_rgba(0,0,0,0.15)] shrink-0 w-full" data-name="Image (Verido Web Dashboard)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageVeridoWebDashboard} />
    </div>
  );
}

function Container141() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[204.865px] left-0 rounded-[10px] top-0 w-[460px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[0.667px] relative rounded-[inherit] size-full">
        <ImageVeridoWebDashboard />
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7e4] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.5)]" />
    </div>
  );
}

function Container139() {
  return (
    <div className="absolute h-[204.865px] left-0 top-0 w-[460px]" data-name="Container">
      <Container140 />
      <Container141 />
    </div>
  );
}

function Container138() {
  return (
    <div className="absolute h-[231.865px] left-[204.84px] top-[72.68px] w-[460px]" data-name="Container">
      <Paragraph33 />
      <Container139 />
    </div>
  );
}

function Container134() {
  return (
    <div className="-translate-x-1/2 absolute h-[304.542px] left-[calc(50%-0.33px)] top-[135.56px] w-[697.698px]" data-name="Container">
      <Container135 />
      <Container138 />
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="absolute h-[16.5px] left-0 top-0 w-[600.365px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-[300.76px] not-italic text-[#d4a574] text-[26px] text-center top-[0.33px] tracking-[2.75px] uppercase">Get In Touch</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-0 size-[28px] top-[7px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p3ea83200} id="Vector" stroke="var(--stroke-0, #D4A574)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p345286c0} id="Vector_2" stroke="var(--stroke-0, #D4A574)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute h-[42px] left-[40px] top-0 w-[229px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[42px] left-[114.5px] not-italic text-[28px] text-center text-white top-0">info@verido.app</p>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[42px] left-[165.68px] top-[32.5px] w-[269px]" data-name="Link">
      <Icon7 />
      <Text12 />
    </div>
  );
}

function Container133() {
  return (
    <div className="-translate-x-1/2 absolute h-[74.5px] left-[calc(50%-0.34px)] top-[28px] w-[600.365px]" data-name="Container">
      <Container134 />
      <Paragraph34 />
      <Link />
    </div>
  );
}

function Container132() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0.05)] border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid h-[508px] left-[calc(50%-0.48px)] rounded-[6px] top-[194.49px] w-[794px]" data-name="Container">
      <Container133 />
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="absolute h-[16.5px] left-0 top-0 w-[697.698px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-[348.35px] not-italic text-[#d4a574] text-[28px] text-center top-[0.33px] tracking-[3.3px] uppercase">From Activities to Outcomes</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute content-stretch flex h-[39.333px] items-start left-[395.6px] top-[0.67px] w-[174.083px]" data-name="Text">
      <p className="font-['Inter:Bold_Italic',sans-serif] font-bold italic leading-[41.6px] relative shrink-0 text-[#d4a574] text-[32px] text-center">real insight</p>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="absolute h-[41.594px] left-0 top-[32.5px] w-[697.698px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[41.6px] left-[256.81px] not-italic text-[32px] text-center text-white top-[-0.33px]">From reporting to</p>
      <Text13 />
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[41.6px] left-[574.69px] not-italic text-[32px] text-center text-white top-[-0.33px]">.</p>
    </div>
  );
}

function Container144() {
  return <div className="bg-[#d4a574] h-[2px] shrink-0 w-[80px]" data-name="Container" />;
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_4043_545)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #D4A574)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
          <path d={svgPaths.p3e012060} id="Vector_2" stroke="var(--stroke-0, #D4A574)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
        </g>
        <defs>
          <clipPath id="clip0_4043_545">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container145() {
  return <div className="bg-[#d4a574] h-[2px] shrink-0 w-[80px]" data-name="Container" />;
}

function Container143() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[20px] items-center justify-center left-0 pr-[0.01px] top-[94.09px] w-[697.698px]" data-name="Container">
      <Container144 />
      <Icon8 />
      <Container145 />
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="absolute h-[28.792px] left-0 top-[134.09px] w-[697.698px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Extra_Bold_Italic',sans-serif] font-extrabold italic leading-[28.8px] left-[349.1px] text-[#d4a574] text-[22px] text-center top-[0.33px]">Verido helps programmes see change as it happens.</p>
    </div>
  );
}

function Container142() {
  return (
    <div className="-translate-x-1/2 absolute h-[162.885px] left-[calc(50%-0.15px)] top-0 w-[697.698px]" data-name="Container">
      <Paragraph35 />
      <Paragraph36 />
      <Container143 />
      <Paragraph37 />
    </div>
  );
}

function Container131() {
  return (
    <div className="-translate-x-1/2 absolute h-[671px] left-1/2 top-[32px] w-[794px]" data-name="Container">
      <Container132 />
      <Container142 />
    </div>
  );
}

function Container130() {
  return (
    <div className="bg-gradient-to-b from-[#162f21] h-[735.26px] relative shrink-0 to-[#2a5540] via-1/2 via-[#1f4230] w-full" data-name="Container">
      <Container131 />
    </div>
  );
}

function Flyer() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[4309px] items-start left-[234px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] top-[32px] w-[794px]" data-name="FLYER 2">
      <Container />
      <Container13 />
      <Container41 />
      <Container55 />
      <Container59 />
      <Container84 />
      <Container110 />
      <Container130 />
    </div>
  );
}

export default function FinalFlyer() {
  return (
    <div className="bg-white relative size-full" data-name="FINAL FLYER 2">
      <Flyer />
    </div>
  );
}