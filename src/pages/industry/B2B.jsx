import React from 'react';

const B2B = () => {
    return (
        <>
         <section
  className="bg-cover bg-center bg-no-repeat py-16 h-100 md:py-20"
  style={{
    backgroundImage:
      "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')",
  }}
>
  <div className="max-w-8xl mx-auto px-6  grid md:grid-cols-2 items-center gap-12">

    {/* LEFT CONTENT */}
    <div className="text-left text-white space-y-6 mt-[-15px] ml-20">

      {/* H2 Heading */}
      <h2 className="text-4xl md:text-4xl font-bold leading-tight text-white w-200">
B2B Digital Marketing Services 
      </h2>

      {/* H3 Subheading */}
      <h3 className="text-2xl md:text-xl font-semibold leading-snug">
   Growth That Converts Conversations Into Contracts 
      </h3>


      {/* Paragraph */}
      <p className="text-white md:text-md leading-relaxed">
 In B2B, decisions are not emotional — they are strategic, data-driven, and value-focused. Your buyers are decision-makers, procurement heads, CXOs, and business influencers who demand proof before partnership. 
<br />
<span className='font-bold text-black'>Adkryoss managed by Clink Consultancy Services Private Limited</span> builds intelligent B2B marketing ecosystems that generate qualified leads, shorten sales cycles, and drive measurable revenue growth. 
  </p>

    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center md:justify-end">
      <img
        src="https://www.techmagnate.com/wp-content/uploads/2025/08/Best-Place-to-Work-in-India.webp"
        alt="About Adkryoss"
        className="w-56 md:w-80 rounded-xl shadow-lg mr-10"
      />
    </div>

  </div>
</section>


<section className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto">

    {/* TOP CENTER CONTENT */}
    <div className="text-center max-w-4xl mx-auto mb-14 space-y-6">

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
        B2B Marketing Is Different. Your Strategy Should Be Too.
      </h2>

      <p className="text-gray-800 text-lg sm:text-xl font-medium">
        B2B marketing is not about impressions — it’s about influence.
      </p>

      <p className="text-gray-800 text-lg sm:text-xl font-medium">
        It’s not about traffic — it’s about pipeline.
      </p>

      <p className="text-gray-800 text-lg sm:text-xl font-medium">
        It’s not about followers — it’s about long-term business relationships.
      </p>

      <p className="text-gray-700 text-base sm:text-lg leading-relaxed pt-4">
        At Adkryoss managed by Clink Consultancy Services Private Limited, we design performance-led B2B frameworks powered by:
      </p>

    </div>

    {/* BOTTOM GRID */}
    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* LEFT SIDE POINTS */}
      <div>
        <ul className="space-y-5 text-gray-700 text-base sm:text-lg">

          {[
            "Account-Based Marketing (ABM)",
            "Intent-driven targeting",
            "Data-backed SEO",
            "LinkedIn & Performance Campaigns",
            "Conversion-centric content",
            "Marketing automation workflows",
            "CRM-integrated lead nurturing"
          ].map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-blue-700 mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>{point}</span>
            </li>
          ))}

        </ul>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="flex justify-center">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAScAAACrCAMAAAATgapkAAAB/lBMVEX///+u2P+UzP84oP/l6fSp1v8DKFjm7/iv2f/4/P+KyP8HOX633P+o1f8MdNft9v++Hh7L5v/g8P/p6enS09W00Oi93///zIrp9P8DGz3z+f8vnf+03//r9f/D4v8FPozU6v+7AAAETayY0f8AbdUAACXCAAC9vsDR6P8AI3QAAC0AIVUAAEi34v+lz/IAACAAKHQAFU+c1v8AACMALnlcr/8AHFIADEwAEkkAABdKp/8AAAAAADKJAABTq/8AEE2Ewf/AGRIAFDtst/+Hq8zV4OwAHXKTpcQAABTak5HhqahrgajBMC/gu4P+7tqRHh0+Y5uttsAeR4eYv+PE1+gAZdSXn6++vr+Lv+52pM4dMlNYic9uecBIk9yCaJixM0GiS2D35ubQcnGKYIvnvLuYVn7x2dhycq6pPUlGUmiChY6oQFPOZ2dXbIZ0lLBGX3wpP1++wtphHzRvAB+sKS4lfdpzHC6dChcbACjCT1VaY3O3pbyDr+dnneGdrsfJnqhfeKSXiqKLEDOlIDdRKV5rGUYXRoeLlqa0mXNBQUuFcVkSIz/dz7vPrHxvY1j/y3vwzqEyKzv+4rvenJz+8uK3d3imUFDmxqr/tWW1laaWLC2ww/VXaZNiiLgmNmvErJGdkIY0arQAQKsvTHWzoXS0YWyboMWveIxMQ0B2YUtN9qelAAAgAElEQVR4nO2di18UR57A50E71UO3zTQwDD09nSYDOIAMaAB1ggrISMiYCA4SYONmzbne6gnqXbw7CTHkHjGXkOjG22yy6u5lWZO9//Kqqh/Tj+rqaiBrPp+b38fIBLu7ur79e1ZV18RiTWlKU5rSlKY0pSlNaUpTmtKUpjTlJxeeV5DwPP+y7+RnKoqsa1kBxDlD4kDIaiVZedm39XMSXs4InAjZeIXjRFHQdKmpW7FYoSRwBEQuWnEh8/9bswoZIFIZNWCJACrWy77flyKKDtgYORRL8+pVKX2mUqlMyS+nC4yi5GRZ12W5oET3IJJGt7ZAVkImZ18kN55P/uLdd68k84l9dIMvyHpG07JQNBg7cgfpDiVdi4uiaAQn+CGezcgRzCIniHuAZIrIaTLui55P/nK6H0rbL/NTe+qGgkOIK4ag/83qhT1dznv1DCBGJ5DVmdxtTtiLKrnaghYY45OV9/rbenp6ptv6f5XXIvdC10BQCEEmngu/BFUK2WCL4UShFKZWUnYfuuRoSpiq/Ga6bfra1avv97T1/92ZKH2AqUhoBBFBZm9Btn2xHT6FsF5CtaJplaIdCCUkyXehNl1DF30falQyww6J8qTdXcnuIcQeOdX9xhGZpQF4/SCl1fdrcbaARPLXUJ2uoqtehwr192k2SDojJLMrWlSdUvo6Yh1vbKhs1xfjOiFsSPt2TA0BU0lodj2Y09WetulfMxieIguM+ZqjJ5lo8e/IjZgyXB+ZZQQFXa2vgYNTprjNaR5d+Ank9KtKSH+Yzc3bERDJoy/f5Gtrs/XX64C5Ac5Fij9AZYojTpV/mG4zFOoW4pSk+RIlmrm5RSxF4LS4Pjyz0V3b6AbMoCCpkk2KybNFEKhP0D+1YbuLXZvu+XVSCMoQJV3YOyQkXISko6WsdtfLMxvrN4ajtBDXjdNLB4wpDtIw3hnhDsrV/neTIqGugS5JIyV7EYXLsmLi43F1/fZw+dTsF6y+3GwCm3f2oDHFQTFfuXDBvr+r+SRqghPjqPRAY31STs9kuch+myzMoAR4Z+XX6+rsTBQXZbShKQfrmkxJJn8xb9/fuXxFsNprSLQL0k7j2NKzDDpX3VhTh2+vbwxGcFFGI9EOZxNhPJmcMj0SLIjz54TwcyjCcZqO9bAgl0jVp8gS9UwnPLy2oZZfq9++HcnyWCQqeXRKOp/M56cELSuey8OP+8vzYcSRc7wAJE2QJEXJ+B8tYOBkHVoeqUOlAoPMWRSjgNnyHkAloeSxwA/j+1InLicBgQdxUclyAi9mJcl/iM5mdUjUjW5BLav1U3voFk2Gb2+okdGDc4iPKXlxP3fESbLIIR/MKdk4J+tiUY75rseFYVIaSqjeWVdR5LsTJTkIF9C3dnd9NmpPOQemfXknriQpck4XOU5U0HA9n5EUXfGaHhc2auowVmR5sDug+0AtT5gd/Md/ipLAmjczZStUhflcQGiGiwEYzxRF1jO8Dr05r2RFMedL+UJyA955vDrbBxsSZmf24HkDRb0x88FMLTp5YTwfyeoAEEBxy3csV4JxKiOjOTCdl0swMeXRwbz3dI5eQbrLV5htwg4NR02i6Lff3f3Ba3u5IKgYmNLh50JGQnHryr3ey1s+TooAHbmGPok41ePkDEoEMt7j6KmBx/LV7o1hdXYwfpD6tPGP/3xnL4YMOAQKJgchhwEVJLauHO7tPQzlnrclwIsw0OFrmD+yEqSl5TyGR494Xn8Gyq9tbJya3V9Why/EWRko4P7lX/d2QQgqPMOEtmYxQtLrfcJZSYxzhpWZnOLI1wDFm5JRy2Ffoa/W1+7s340LoK6nUrKGr67eLwdeEE2AYKsBxke3AHAuFNPWZZsR5rTiAZXRRVHkRTR/JCoATSKJaESR4yM5cs3fsKru2+jU2c1UCma+qRS8I/Dhd2RMaLpOLzTGAJSc7iv/QwMKKCJMvVgwqCsesCWlICkxXDtLMSmHZiUVuZTJ+DgJEdxTqMAnHyzALDPB7Egqlaot1KpSSuPUWyRMHJclLiuQdECqUYLb1RCmrfrK1tZHV+4hB+XVJzkrwGQcH6toUDKZXE7X5VgUTr7oGCYhhTUvoblFMLksSQujA6Pn5yCo8vt+ThwgjbCbUiCM01CMYqv3cG/d+KhBleotukFp0LVAg0MfTf/E6SVo4T7/RLM7X1q6T06GLI5UU0vnWx88Gx2oSYWPP/SFahCS/PqnJCid6IRwruBPJWyCnsxAgEDEgmZywiMrKDHIFqL4cW9wPBhON9ckaWN0W1Hmzg/U+PtedWKoOX2zEhROBaRESDt100F52kOOSIfOHGglXobeqSTksgYr9q5FHtdm4nRnU1GeDTyQUtKDgYFP5t2NcFmmqSDFrRU0o7gCOXXCAsyKe5zrVJRjcgIvKzBM8LqWKck5tE6E9ym5/jfnNAM5LQzchb5c2Rj9t45UlvV2nMK7QgyN0wp0UB9h88OR73LCfcuaJJaUmA5QQgA9H6qENYX3TaNR8/EInDhBYOTETxqcoD4VpIV/31acrUSYq3aConGSL8Mo99FlBOny4Y86+Zh7HE5UeBloKAfnpKwJLuvLCuj1HTsnWHLDAoCN08ymhO1OmnvAP/mP0SVboaD+s2OKOQeJqEkgSgd6UU6OIOFuuXw0giIqGlIZdCOwtMsS8iFq+sTux9HAaJzVP92QlNpoTUq1np+7tT1aU0wljzJThsQRjamcUGZw+fCWY+LVZVVcRoEpLR83y2GYRZFmiKg9Y84LsFsRGDltdiMPvgA5tf7ntc7RgVQK2KwjSUPdqZw6L19Z0d2/KrlB8VkRwUIuHfC8REjy6cMFfjMN4oQyHo01L4D5U/X8WFVZaL2woXwKLVBj6C1JbPOgn0lwelnX3WcVSZNzoqwB6D4I0wih476hpZxZb3FoFh5qMxOnI28sF6RLAw+UudHWT2M1h+FFmcvHAKwuRSbsSbdFNJnMx3heDliiFeISssSTGpKFtSlmJRh3zcRJ6bvBS3OjCwo0vDHp7sCllGVAYtS1u9b9ReYU82oNeg0CxINmR0NG6cJWBnBYo3MZIIr4rhknTjdHWlLVgYElaen8mFQdGKum3Bdklxx6+gCA6JyYXQoWarSz7oPCycKs4Lq1wC0x3eORUw8lZXt0QZKqS4VU60A11bBvV2bQ3q6g4rlQkIJWXwtxoNZny5EXspKGjCj91EMuFkLdq47DPRfmr7svoJjvQLl+u9adSlVHUaoJ5dL5JUeEcWhGx2Z335pm1KZoPTEJVQmU7/T1DW74bpzYrlNCVMDdzxBMYdS9j/F6T1tPz4VrDlSyaArsaEa27nrxjYeoFIYGhzgNODmZSRTfsXjntZnu7r7GpCpHeqoStwaP6u676fl9wdUucZ1lBEzh8YWekXs5vdnT1tbWM99DPh9qhbUydG2wmpIujV1CnMZcdmfo+PLM4CDqf/eac8RSJICqD6LDul9b9PJztUtauxvB8MLLBLrhefXx/WnE6cn9YM6cAapjZFNJVcfGLlWVpfOtqZTrkFxscQR2fRKpk3u9lehXDKF78gsEavCmqzOSt11/wGJeMcqUrtCo+wwBYWprm2+sTPLro5l0P3x9WZKWWscG5hZg/uQZWomhnk9+9l+TM+uewSK/v9Zrn382iUBNDh6hcCLUscxFGVOdUKBczQv6OjK76Vv3rzV+5eNkTdRvjizCcLcwMDB6vpryPAwB2dJMV9dbXTuht6yXH3V9gU20u6+Dxkn3nslalIUuLTCENpXgsTvsnqbnjfXvAZxslbjx+qKSku7WaktSyjOJUh7snpn8vAuJ53TR52fkna6uL7FCdU8+pHDyp6KsnMJyp8CeOnrkPvTWNOZ0gXq23ezN12+mJCiplPdRDK9NfvUVxvTI80+OZ/vfxo8cOuyzyUnozQaXaZyA1/AYJ0k41pcSKDWeRyUvIO90Yf4WG6fYkZnBh0vVlpSvATB76jOMqeuxl5NuUXq7y+wtPu6trz7/7cyko0d+Tr6gxTOtJmGvOWkKJTpfZjHc0/v332TkBMPe8vIRb0mKRJ397Ze4/x2erlh3/fbXX39tfFJ2DKJdn/dR/bifU3s9eB66IREqImoxzAH7HUsje3rS48zI6ZyMLhESY7X+BTa7Dm9rFqeuLtPuCp2PDI1yZ1Chdtf+u4unL34YCorRiQd2xCnoHUjkX+9PY7PrcZ7r5+QrlYnxWX2Aux8464EgYlK5OD7wy1PuRDPMj189ffr0NxdPfxIOKsILLsSRK/fVOKDJptk53ZOfk+h7q5Sc74Fvv/32caevHevxPu56HHtsNLCDQH12xH1Rf17gVoxvTv/h4ze/uXgx3PKiDGGEXgx17IFpdk735M/H/fbum1E0Lrfz6NGOz9PaecHbj0zL0znw+0ePvvVe1MfJbe5XT1+8+M1VqFAPGHw5++QGS+qqftc/jc3uqvNMDyeOkIyQEjSgqlBNdsSyZyWwnYi83fW2RRnsfPvtoxBOnMc7IU6/Of3xaSZOjAkUEpY3ecDdFz09820XXCe6OHGkcTxCugfU+vPVpzuPdmYHLj13gmok1S0tpmYJnPgYEvVas5sTp3l14uLFP1y8+CbkNKxlyArtOJv5rVq20T8wXP74Sc+868QGJ06ME99N9rsntb4wMDZRf7qzUz/bOuBcumnn/3xLi3EtXis9vXv36dOSZyBPcrTLaU4XY+wK9PHpb548gU5KUlpuboZ1jD3osU546rFrV90ninjNExACd/7wKb76fLS1tXXo0NOnd+dOto5tNxSqoU4pkxPk1VJteZptQZJy5pmNdu2ApSgpW6TfwYB3+g8tqZubVQavwuqiWMdqfBrKh23o5F/ZuI0wtQ4NrT2VaydbW8dsZ77TGC2AnCxMLknZRxDaXd9cUgoWqELHxx+/wy/f6JDcozpkYR1XZl1qyG7JlnivYGKC+nRiWbk90do6umo6eu7x24+ts1oMTl5MUGhPvvrwxnKLZJPil24sYhUL7x2j5flfYwh4vy0yJ81zGWHVwNTaeujkTf7OEPywYBre0qNHVpAzOaUInCig+JSUWtzcXJKwUknVzRuKAY1ldSVTb7zRvSRJikx6/zAqJ68TB2AMMbqEFGriBn8I/c8YHiIH6tcwBTeLOh5bmMfqLGrBrSEmClSqh1WlID3crC7fWE4hUmGzlHHWmOd2T0CRAQdDLeHyETnJ3opIXUWcFvDfQ4dSQ5gTTA2AWl74suuxpU4GJ48iWeCCx0FSph5BpXp4Y1FKFaTFzZsdksTifZmGV9yn4FULMicQavJonAgpAdKk0fpzzOnk0gS2wDFhuPx8bPRZ40TMyevE0T/QFQpjWtyUoBJ1mE4KqddiWAKFhcGVu91TRhczUlyOxQkZYiROhJq+DL3T2ELmEuZzbNng1PopzKdazz9wcWrxxTp8p2GcpOWbjuwAu3Npcd3roIjvVYXXee6kWtZESRB1Zd+cYrx3nRFAXny0rpqu/LbpqpAM1Jwnkhx4OCeoSA8fSimvFNzuFwhcIp2I+5x7+EiUy365XFbMaRqf0wmFflQ/7qmHVGRwC2p5rNWWhQX847xrxtfkVPVxSlE5KcrNZcWHKZVycRIS4/h12nPeV9AIk2IecaHlIB9QyMWlAif4PHnkvMD9KIcXsDrVjdwA01qoD8Dftd51n2aQEYj+Kbg7/OaiX5uQOG7CfqE2n097VCrMQ3mKOxAT0Cs5ogh4X6CInme6lBK7cRWsGvo0h2Pf8NynC3PepAiDiWuutCAWpk6xRR8mGe1Ol3XwAOON9469r6yFvKroW7Eg8DlNEDTZ5172wslleuASygKw9aG4h3Rqm3hz0PBgkMp4OIVggj1p1HdKThD86bLgwOR7BTJs1Yp/LbUmFwr+Fft74+QcfoecRutAXTCSTeSZxmoBZ6Est8Gp/XGLYjgt6jOHeBpLWLylAMLkfIsdgfJaElUIadiB1S1Q+Ia6Qrv7FADViHELzxAn34odQ7AqN+xO/vpr2/iYxXf3aPcINyf3630hqUGE9+32wslheVCTFlTAjTbC3egD4imGxQtGqdL+9eOurscypBRt9y//nH7SJ+7hPupcXtgYnTMp80+mZE3RMnrQFk2NiVl1e2BVBeUFG9OhE4ukMyzH+KAFhvmWq4/RjKh7x2SFoV3viLPD6vLnDNXKJ1xKQh0BJpQnLkrFRNEm5ePkqOA4ThTIuyHang6s/rEO4qB+8pAlxx76D7c2JwP1yaN31pcXP/sTBOVZKCa52gUlYrtuxwuKDqvL5M2Q5+Ik7vnlDZCowJysYr385+fkGWkg1t2NGeGlR52o/2dtTkO3/Udbtw5mIc+JY2eHPvv8rTteTt52SckP7wrkaA8gS52EM0kSJ+owFG32zvJ8VqoRxok842J7QPD7rq4srPKwPg0NYVLeYxujtOrGBDpsYujYoYkTy+6j/PN3vnUYMfdMt0Od8lMJK9n0bI5A87+00Rnb85kXDOdE3J3LfBSg/GXXl/+jAoD6v7Z7B2Ga8HTPYchqDZHcrj2DP85S1h1aIPztOg3PmRNo1se85y1ZmoOihDvHJifGFRk4kZQXHSUMDw9v7Dze2S6XV1qhmqzHYg8hrxPuxNGp3OrtoUNDz4aHEa6j4ZwIJu86qtEVy+qghLO2hbK6wDBpY/+OCisnwipjhYuDX3z//fevvvrnP8M/f371FWxwy8cgJ8ciOc8Ag7qLcKrDu4hTh/uKpODjH2pzvLXZeOSwAraReTeWoozWEZbdNDgZiPCjwDkZEyf/2xkwMwCvOgVyOgrrMejPTzgWDnheZAKIU00d/iOEetRTrxA56b7OxUUrVAOsQ+i55zMNzUp41xUFZ5q09egGp/w5/CzQvjlMnAiFN4gLPk4tscUTLsfjuRYAyH3VVPTj0NH2cE6+ESRlHIZqMwJxeRNRPgEdlUmq4h2EoqxeoaUFZijNi5aSsnHye0Mhrn6PAdVu2pw6Yh2Q0zE7kHnjLigjThtqGXnzE54LkpM+z0HYc+fPoF11cODOT6EHnoWYpkhZZpyaGJSCMTUGa7BF54uMnPzeMAtLlleQ/OUv+Iefk3/nW4AATayqZRQdJ1g4eQZGeHNjpAoEhaNdHsa5fPwM5GMYiH/bOwon2mSEnT6lxw2FYuTkS2VsTgOv2JyOxKon7IScMLeNOZ2cVevHUBbBxMnthU1OEBTkdAb5D5g2VYQ85JMnBTs6J1r6BOzIYCiUiF6HdEGIqk+v2JxgZVc9a3EirZcxOK2qqMoZ2t0Dp5gV/iEYgPMB9F8FeilijhnCiTpZKliPZApHinOl2Jl8Ug/j5PdPkNNzC9HY2ICXE2GoyOR0dtbg5C1vmPxTIxWYwpygZzoTz+c1MzoRek7hRB1VsbOOvKFZJR2ZueNiRE7+hA/68eetn166tLC9XduYe1CbwJxajmH/xJO/68XJaWKdhZM33gmOLNnw4vl4JR833Pu4v+MABG/M6ttAwy2W4eUTeBM0IKB9Uit0Tv6XCmK420CwdkVHCYHNKegOInPy5W1Ko1IZr2AvDoNd3Hj03k0UYZ4lFhPpwPwpZNW+XWRXEmYqm09A5aJxIpTueCYQNBzXEQenB0GGj/OCs7MC5uQdfiFx8pu7e5gXenDxTNb4XcWxCwtCBBlhCRxYCRmls6vs/Ef30KdEHrqqfJKyQztpwMCMZnbC3HHU5nRyNUihAfhjFE6kAYOMk9M4vHc5e8bAZE7eoVerLURIikGYQjllzVTzcO/hw/egQsHIms7nbU/gXxdNGpoww5k9DIY4wbyg5SwK/IGGL+xiTih/8g3n+TiJviWa6O4MUxg3fPm5/JRRDOeTSJuwpTkYIQmug+lvFYGpihFc8RYmEJTh0vPniJy4oK+PMU3Lpos5dRicgrfWVGEBfBJyGnJm7RYnZ7WFvuGH6Fg07Isq2J/nE+N5YzwFJ56i6EGEJB08QE7l1NiNGGL6CILKW6HPengyGj7HImQzQUs0zVK7EXQxpyrOM89W+SCJrWNOqL7zc3K1GzBCzot4r1KUD8C/45UKMAoZEiKDU/BXT9H1ybZvtKHZFUOhoCN3pQZkuf7m/PwT800YM+VvpIGYUzuuW7zjdE65OYHyTJXEiUl0zijrREwrnkycw34qPTU1FQAq+FpUTlBzzhgzqMjuylChcB6LUlr6HV7/oOfCrffv9+BV1FYTDUeLOfGYk2/c1yHLx1AdPLxLnm4IF2jReEhuPGHQEsyQhDY1T5MwUYYzyX4cazT8gbaSx6DuoS0872HDw5zoi2Dme+avo1Xc7dfaLly1K8jGXSBOx3B64CtInALTrIkaHqfzxTsW0dFWIaJZ/6IaNesIfxWSe6JYCe/Bg7yxaMeB8aQJCm9NudKLDC+c03zPdT7Gt2O5Nd1iPYnGOSagxbP+BNIpEOfQtqpu742TgvqRKKLRJjSekh/PpkM40b6QkHckEr4wmTDMG4EyDe+e6Z9odncNYWq35NZ9a9v3Rv4JFQWNj0O7ojqedsjpmarCKoeKM0BEowvFClKo5LmtcbnSwJQneKg0dWEP2hDfD8gSPGyD/kYK9REMeUa8o/rxticOTO1LPR8eN77VsMF2+SzWkIcTKIuiyARUOxVN4w1F5yTYHghmfUsdSFbsujhJdOTUaXkugFDCtjxoabCCRLsJ1hGnpDMvIMi1nnYnps4ff2M+hIbdmYq0PnHoRHvwhWKx20OHdgU0LUp1Y0TRGo56qt5hypKJaZzUU7o6xeJ0TumkWdchT16HjvzwvfFkI88kyPz7PO/A1Hm3f8XLCQZ8tLAAYlijPkM0cVU2pkUjQXJhSnR2dDhB5c+kydZDv2KWjskc0KyAM70whbp3GNlfMk+bD7z/xIWps7O/7uUEAZ2oxmLEaXOnLB47dLKM5xO84+MhAhyYih0O6YTpE5kSLdghKREzCUvshPwe2o35yhbezZNqdrELb1pmV+3E0j/r5YQmnNpj/NGwOAYTrJOrieKuf76FKpKLRN3JqWPrHDnHTIdulUXlZI/T4e29e+u9vR9B26Op6PULT5zKRNSnoUNDd3DYp7vxmAIzgufF4rMh3zwnRfisu0f1d444ONVhcUrqqBh6XSqnhDEOkc/jLLO3fvke/JMMhjR/oWf6lsI7KHV+2OP14+1ncQCD6dPRkLXIu0ND28eLzycC1kmRKGUS3g4dccg7W2QvXgxfgiZSOSUqEBQMe72HOw/3Xq5vtSwtVasUSOhd6/ZYi02pc/jFi+MeTtWjONzdnEBaRRXoyHePF1dPshZ4uayPElKod2xMD/IVgjqlw5b6ItHoCpUYR9OnU/dgmrlVtR207ypXnxiQ2tr6+3+X6WzI3f65hIcTTMeRwe0OhZZtKCGFZ4bk7YYoukCAhKS8+I4pd9MJUr3C9Joi3UFBlZxC08wwf+ptaaRF7a4RkKtvwpIXQ+rp/+C7uf4PHZw+sNQJcjLHS2D6dDQVS0FrWooFjqpgSZ2Fjrx4HAfGoGMUKSeXslwxTelHvXPxyJHFzhXSIWn/lgtkCcrFGzJ1BpbYvVvQDZqUOjrKaUsSP7xnQ3rvu/rx4vFP+r8btjF94LgjQ5BfPlRMQ2s6lEjTJbE7BB35cXQC/dDQLqDm+ZgOEu5j02n2b3zNBLZStOqZYmLqXMUVX6v2QfX+aQPShR/rxvHFH/rvY5W6+2P/C/9TKELv/KxY3D5x9tlx3z96Dn1+9MRusfj87LFjKywoaGJaV6EkII+McYlZOcISYj7oyivPaxuO23NxKtu/rve3tU33t/041ygSi/UX/f3v3W/r/+AHEonyozI69J3H4Zpc3PkTvIPiyltLLCjol3J2GW8qyY4oUKGgJhWPr40Mvjbo6MuSlf0vlZ2HvoCaNOeppIvFuU8++QEaIemGV/96Gzqd4+t/ra0UiUfYF1lZ/WoT3slK7X/Xw5nSJXhqjl38V/2hf/rF8dXdO7BDoXdQrBOHG2yjTXhgFNdH+vq6b9e6B/v61m6vBl52pbbb3TfYt7p9Z7BvcG2fnChTBOxCCHnf/fgh1KjjYQ6ERYrPZp65e7lR635tZKT2/PbgyKnJQMdz6o2RkS+2a6+fGhnZXd+newotS9jEX+QVA4ek3O2zBJ6VDU8vkSmt4CZWVijNrK6uYNtbXWG7GYqwvXcfLsExL0BwgOeyWkmXc+hLVNH3N+VkPQODCVuU/ptKePXGKjpzmxBDMZ4NfqsEfZ22GJAZH6jUH9TZ1Cwdvs8xuyhieNeQDgmlHMOr/rxMqrQOVOr9/f33WUAdKKYYUilKzzCiTLASEaSgFX9SVN+9ePEDA6cDcuFOKRGLJGRoIBMlc7WFWL8flBSZYs2BJAT+jmmiHbWM+CVmqYbGI+9dymSwPyehlLmX69ajfiUDu0hySTPeAJSJPbdFKQFPYoAVz0tV0Q5MqVA+ESVJSEfYpO+nkhxHTACwI/M+RJ0hSLBger7WPTOzxpx0/jQ2F02ytJ6nE4JnuEI6CE+1+gbeOJqxiEnHWbc4/gkFhPU67V07y2f2Hf5W+tBO5DNMnNLFn84zsYvM0GV/QJbj+yNVXLm91r22Wwu3u3R6T6/GH7gIbP3yeVFln+aHSnPaUIxJKbGHL3z5SSRkksYSUl11QD6dRinz8qOcKSGrN+xb1kknH4hPD2yySGzzJYnGeNdBpZUMQlChgZc9QPLF2ZcsCqNCUBau6+T8yzzv+fnzCxEHndJpkfL1zS9JdDZQ1PExiCpQq1ZWAweEyZAS3M8PEhImUGT/5BBeFgLG9aJUJ9Dc9lSm/01ECU01aWbnkEImvucxUFwlBa3v/7mIFDShb3WCZXmDIYUSKEaDhavu+N6Ge/7mwusgaNIaetWIhYOSK2XFROgsuDH3DjSdZVz1ZyRSSRATjskWc3yFvNVQuPAFOZMFHHJP3pmcYlGMC1rYaM/PWXglh3cWxCeRQ7oAAAAzSURBVMNWJblwAB1BK1EUKZfLyXIuV5BCtjlvSlOa0pSmNKUpTWlKU5rSlKY0pSn7kv8D847Fef2cB2YAAAAASUVORK5CYII="
          alt="B2B Marketing"
          className="rounded-2xl shadow-lg w-full max-w-md"
        />
      </div>

    </div>

    {/* CLOSING LINE */}
    <div className="text-center mt-16 max-w-4xl mx-auto">
      <p className="text-gray-900 text-base sm:text-lg leading-relaxed font-medium">
        We align marketing with sales to ensure every campaign contributes to revenue — not just visibility.
      </p>
    </div>

  </div>
</section>



<section className="bg-white py-16 sm:py-20 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto">

    {/* HEADER */}
    <div className="text-center mb-14">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
        Our B2B Digital Marketing Framework
      </h2>
    </div>

    {/* FRAMEWORK GRID */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* 1 */}
      <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <svg className="w-10 h-10 text-blue-700 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v4l3 3" />
        </svg>
        <h3 className="font-semibold text-gray-900 mb-3">
          Deep Market & Buyer Intelligence
        </h3>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          We identify high-value accounts, analyze industry gaps, map buyer personas, and understand decision-making journeys across complex sales funnels.
        </p>
      </div>

      {/* 2 */}
      <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <svg className="w-10 h-10 text-blue-700 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 20V10M10 20V4M16 20v-6M22 20V14" />
        </svg>
        <h3 className="font-semibold text-gray-900 mb-3">
          Precision Targeting & Channel Strategy
        </h3>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          From LinkedIn ads to search intent campaigns, we choose platforms based on where your decision-makers research and engage.
        </p>
      </div>

      {/* 3 */}
      <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <svg className="w-10 h-10 text-blue-700 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 20h9" />
          <path d="M12 4h9" />
          <path d="M4 9h16" />
          <path d="M4 15h16" />
        </svg>
        <h3 className="font-semibold text-gray-900 mb-3">
          High-Authority Content & Thought Leadership
        </h3>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          Whitepapers, case studies, landing pages, solution pages, blogs, and LinkedIn authority content — designed to build credibility and trust.
        </p>
      </div>

      {/* 4 */}
      <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 ml-60 w-80">
        <svg className="w-10 h-10 text-blue-700 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M5 12l5 5L20 7" />
        </svg>
        <h3 className="font-semibold text-gray-900 mb-3">
          Multi-Touch Lead Nurturing
        </h3>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          Email automation, retargeting campaigns, CRM workflows, and performance analytics ensure prospects move from awareness to conversion.
        </p>
      </div>

      {/* 5 */}
      <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 ml-60 w-80 ">
        <svg className="w-10 h-10 text-blue-700 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 3h18v18H3z" />
          <path d="M7 13l3 3 7-7" />
        </svg>
        <h3 className="font-semibold text-gray-900 mb-3">
          Revenue-Driven Optimization
        </h3>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          We continuously optimize based on CPL, CAC, pipeline value, and ROI — not vanity metrics.
        </p>
      </div>

    </div>

  </div>
</section>



<section className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto">

    {/* HEADER */}
    <div className="text-center mb-14">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
        Our Core B2B Digital Marketing Services
      </h2>
    </div>

    {/* SERVICES GRID */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* SEO */}
      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
        <svg className="w-10 h-10 text-blue-700 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
        <h3 className="font-semibold text-gray-900 mb-3">
          B2B SEO & Search Visibility
        </h3>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          We help you rank for high-intent commercial and solution-based keywords that decision-makers actively search. From technical SEO to content clusters and industry authority building — we focus on long-term organic growth.
        </p>
      </div>

      {/* ABM */}
      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
        <svg className="w-10 h-10 text-blue-700 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 12c2.7 0 5-2.3 5-5S14.7 2 12 2 7 4.3 7 7s2.3 5 5 5z" />
          <path d="M2 22c0-4 4-7 10-7s10 3 10 7" />
        </svg>
        <h3 className="font-semibold text-gray-900 mb-3">
          Account-Based Marketing (ABM)
        </h3>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          Hyper-targeted campaigns crafted for key accounts using personalized messaging, intent signals, and multi-channel outreach.
        </p>
      </div>

      {/* LinkedIn Ads */}
      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
        <svg className="w-10 h-10 text-blue-700 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="2" />
          <path d="M8 11v5M8 8v.01M12 16v-3a2 2 0 1 1 4 0v3" />
        </svg>
        <h3 className="font-semibold text-gray-900 mb-3">
          LinkedIn & B2B Performance Ads
        </h3>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          Campaigns built specifically for B2B lead generation using advanced targeting filters like job roles, industries, company size, and decision-maker levels.
        </p>
      </div>

      {/* Content Marketing */}
      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
        <svg className="w-10 h-10 text-blue-700 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 4h16v16H4z" />
          <path d="M8 8h8M8 12h6M8 16h4" />
        </svg>
        <h3 className="font-semibold text-gray-900 mb-3">
          B2B Content Marketing
        </h3>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          Strategic content that educates, nurtures, and converts — including case studies, industry reports, thought-leadership articles, and conversion-focused landing pages.
        </p>
      </div>

      {/* Automation */}
      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
        <svg className="w-10 h-10 text-blue-700 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 6v6l4 2" />
          <circle cx="12" cy="12" r="10" />
        </svg>
        <h3 className="font-semibold text-gray-900 mb-3">
          Marketing Automation & CRM Integration
        </h3>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          We integrate tools that align marketing with sales pipelines, automate follow-ups, and provide transparent reporting dashboards.
        </p>
      </div>

      {/* CRO */}
      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
        <svg className="w-10 h-10 text-blue-700 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 17l6-6 4 4 8-8" />
          <path d="M14 7h7v7" />
        </svg>
        <h3 className="font-semibold text-gray-900 mb-3">
          Conversion Rate Optimization (CRO)
        </h3>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          Landing page audits, A/B testing, CTA optimization, UX refinement, and funnel improvements to increase lead-to-opportunity ratios.
        </p>
      </div>

    </div>

  </div>
</section>



<section className="bg-white py-16 sm:py-20 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto">

    {/* HEADER */}
    <div className="text-center mb-14">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
        Industries We Empower in B2B
      </h2>
    </div>

    {/* INDUSTRY GRID */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* SaaS */}
      <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 text-center">
        <svg className="w-10 h-10 text-blue-700 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M8 20h8" />
        </svg>
        <h3 className="font-semibold text-gray-900">
          SaaS & Technology Companies
        </h3>
      </div>

      {/* IT Consulting */}
      <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 text-center">
        <svg className="w-10 h-10 text-blue-700 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M9 17v-6a3 3 0 0 1 6 0v6" />
          <rect x="4" y="4" width="16" height="16" rx="2" />
        </svg>
        <h3 className="font-semibold text-gray-900">
          IT & Consulting Firms
        </h3>
      </div>

      {/* Manufacturing */}
      <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 text-center">
        <svg className="w-10 h-10 text-blue-700 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 21h18" />
          <path d="M5 21V9l7-4 7 4v12" />
        </svg>
        <h3 className="font-semibold text-gray-900">
          Manufacturing & Industrial Businesses
        </h3>
      </div>

      {/* Healthcare */}
      <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 text-center">
        <svg className="w-10 h-10 text-blue-700 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 21s-6-4.35-9-8.5S6 3 12 8c6-5 9 1 9 4.5S12 21 12 21z" />
        </svg>
        <h3 className="font-semibold text-gray-900">
          Healthcare & Medical Enterprises
        </h3>
      </div>

      {/* Education */}
      <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 text-center">
        <svg className="w-10 h-10 text-blue-700 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 3l9 4-9 4-9-4 9-4z" />
          <path d="M3 10l9 4 9-4" />
          <path d="M3 17l9 4 9-4" />
        </svg>
        <h3 className="font-semibold text-gray-900">
          Education & EdTech Platforms
        </h3>
      </div>

      {/* Finance */}
      <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 text-center">
        <svg className="w-10 h-10 text-blue-700 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v8M8 12h8" />
        </svg>
        <h3 className="font-semibold text-gray-900">
          Financial & Professional Services
        </h3>
      </div>

    </div>

    {/* BRAND STATEMENT */}
    <div className="mt-16 text-center max-w-3xl mx-auto">
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
        <span className="font-semibold text-gray-900">
          Adkryoss managed by Clink Consultancy Services Private Limited
        </span> creates customized B2B strategies tailored to each industry’s buying behavior and competitive landscape.
      </p>
    </div>

  </div>
</section>




<section className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8">
        Why B2B Brands Choose Us
      </h2>

      <div className="space-y-6">

        <div className="flex items-start gap-4">
          <svg className="w-6 h-6 text-blue-700 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M3 17l6-6 4 4 8-8" />
            <path d="M14 7h7v7" />
          </svg>
          <p className="text-gray-700">Data-first strategy, not guesswork</p>
        </div>

        <div className="flex items-start gap-4">
          <svg className="w-6 h-6 text-blue-700 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v8M8 12h8" />
          </svg>
          <p className="text-gray-700">Revenue-focused campaigns</p>
        </div>

        <div className="flex items-start gap-4">
          <svg className="w-6 h-6 text-blue-700 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M8 17l4 4 4-4M8 7l4-4 4 4" />
          </svg>
          <p className="text-gray-700">Integrated marketing & sales alignment</p>
        </div>

        <div className="flex items-start gap-4">
          <svg className="w-6 h-6 text-blue-700 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 20V10M10 20V4M16 20v-6M22 20V14" />
          </svg>
          <p className="text-gray-700">Advanced analytics & reporting</p>
        </div>

        <div className="flex items-start gap-4">
          <svg className="w-6 h-6 text-blue-700 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M3 3h18v18H3z" />
            <path d="M7 13l3 3 7-7" />
          </svg>
          <p className="text-gray-700">Scalable multi-channel growth framework</p>
        </div>

        <div className="flex items-start gap-4">
          <svg className="w-6 h-6 text-blue-700 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
          </svg>
          <p className="text-gray-700">Long-term authority building approach</p>
        </div>

      </div>

      {/* Closing Statement */}
      <div className="mt-10">
        <p className="text-lg font-semibold text-gray-900">
          We don’t just generate leads — we build predictable revenue systems.
        </p>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="relative">
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmssvBLlQwqCQBnakFTPS35bLYWBwhw1hQjA&s" 
        alt="B2B Revenue Growth Strategy" 
        className="rounded-2xl shadow-lg w-full object-cover"
      />
    </div>

  </div>
</section>



<section className="bg-white py-16 sm:py-20 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto">

    {/* HEADER */}
    <div className="text-center mb-14">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
        Our Technology-Driven Advantage
      </h2>
      <p className="text-gray-600 mt-4 text-base sm:text-lg">
        We leverage:
      </p>
    </div>

    {/* TECHNOLOGY GRID */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* AI Intelligence */}
      <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <svg className="w-10 h-10 text-blue-700 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 2v4M12 18v4M4 12H2M22 12h-2M5 5l-1.5-1.5M20.5 20.5L19 19M5 19l-1.5 1.5M20.5 3.5L19 5" />
          <circle cx="12" cy="12" r="4" />
        </svg>
        <h3 className="font-semibold text-gray-900">
          AI-Powered Keyword & Competitor Intelligence
        </h3>
      </div>

      {/* Intent Data */}
      <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <svg className="w-10 h-10 text-blue-700 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </svg>
        <h3 className="font-semibold text-gray-900">
          Intent Data Platforms
        </h3>
      </div>

      {/* CRM Tracking */}
      <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <svg className="w-10 h-10 text-blue-700 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M7 8h10M7 12h6" />
        </svg>
        <h3 className="font-semibold text-gray-900">
          CRM-Based Performance Tracking
        </h3>
      </div>

      {/* Automation */}
      <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 ml-50 w-80">
        <svg className="w-10 h-10 text-blue-700 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 6v6l4 2" />
          <circle cx="12" cy="12" r="10" />
        </svg>
        <h3 className="font-semibold text-gray-900">
          Automation-Driven Nurturing Systems
        </h3>
      </div>

      {/* Dashboards */}
      <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 ml-50 w-80">
        <svg className="w-10 h-10 text-blue-700 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 20V10M10 20V4M16 20v-6M22 20V14" />
        </svg>
        <h3 className="font-semibold text-gray-900">
          Real-Time Campaign Dashboards
        </h3>
      </div>

    </div>

    {/* CLOSING PARAGRAPH */}
    <div className="mt-16 text-center max-w-4xl mx-auto">
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
        Modern B2B marketing requires precision, speed, and adaptability. Our approach ensures your brand stays ahead of evolving industry trends and digital transformation shifts.
      </p>
    </div>

  </div>
</section>



<section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 px-4 sm:px-6 text-white">
  <div className="max-w-4xl mx-auto text-center">

    {/* HEADING */}
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-8 text-white">
      Ready to Accelerate Your B2B Growth?
    </h2>

    {/* STRATEGIC LINES */}
    <div className="space-y-4 text-lg sm:text-xl text-white mb-10">
      <p className='text-white'>Complex sales require smarter marketing.</p>
      <p className='text-white'>High-value deals demand strategic visibility.</p>
      <p className='text-white'>Sustainable growth needs performance architecture.</p>
    </div>

    {/* BRAND STATEMENT */}
    <p className="text-base sm:text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed mb-12">
      Partner with <span className="font-semibold text-white">
        Adkryoss managed by Clink Consultancy Services Private Limited
      </span> to transform your B2B marketing into a measurable revenue engine.
    </p>

    {/* CTA BUTTON */}
    <div>
      <button className="bg-white text-blue-800 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-blue-100 transition duration-300">
        Let’s Build Your Growth Strategy
      </button>
    </div>

    {/* FINAL LINE */}
    <div className="mt-10">
      <p className="text-blue-200 text-sm sm:text-base">
        Let’s build your next growth milestone.
      </p>
    </div>

  </div>
</section>

        
        </>
    );
};

export default B2B;
