import { FC } from 'react'
import { Link } from 'react-router-dom'

import useWindowSize from '@/hooks/useWindowSize'

const SvgLogo: FC<{ color: string }> = ({ color }) => {
	const windowSize = useWindowSize()

	return (
		<Link
			to="/sultan-shop/"
			className="group w-24 h-12 block mx-auto md:mx-0 md:w-12 md:h-full lg:w-40"
		>
			<svg
				className="w-full h-full "
				viewBox={`0 0 ${windowSize.isLogoShort ? 49 : 156} 66`}
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clipPath="url(#clip0_88_2755)">
					<g className="md:hidden lg:block">
						<path
							className="group-hover:fill-orange-700 transition"
							d="M63.8707 29.0774C67.1621 29.0774 70.7282 30.8767 71.3406 35.1097H67.3467C66.7794 33.4993 65.5727 32.7705 63.8707 32.7705C61.4887 32.7705 59.9218 34.5699 59.9218 37.1924C59.9218 39.5316 61.4662 41.5693 63.8707 41.5963C65.5997 41.5963 66.982 40.7327 67.4143 39.0323H71.4081C70.8183 43.5306 67.2567 45.2895 63.8707 45.2895C59.8182 45.312 55.7433 42.5905 55.7208 37.1924C55.6983 31.7944 59.8317 29.0774 63.8707 29.0774Z"
							fill={color}
						/>
						<path
							className="group-hover:fill-orange-700 transition"
							d="M77.7657 44.6959L80.2512 39.5767L74.9065 29.8513V29.2395H79.4452L82.444 35.0874H82.5566L85.2807 29.2395H89.7068V29.8513L82.1468 45.1457H77.7657V44.6959Z"
							fill={color}
						/>
						<path
							className="group-hover:fill-orange-700 transition"
							d="M94.7049 45.1455H90.729V44.5562L97.8793 29.0684H99.6128L106.817 44.5427V45.1455H102.841L98.7573 35.8474L94.7049 45.1455Z"
							fill={color}
						/>
						<path
							className="group-hover:fill-orange-700 transition"
							d="M108.668 32.8875V29.2573H120.469V32.8875H116.588V45.1456H112.572V32.8875H108.668Z"
							fill={color}
						/>
						<path
							className="group-hover:fill-orange-700 transition"
							d="M133.5 43.1347H127.237L126.305 45.1455H122.333V44.5562L129.484 29.0684H131.231L138.404 44.5562V45.1455H134.432L133.5 43.1347ZM130.348 35.4875L128.547 39.662H132.181L130.348 35.4875Z"
							fill={color}
						/>
						<path
							className="group-hover:fill-orange-700 transition"
							d="M156 45.1456H151.844V38.7579H146.941V45.1456H142.789V29.2573H146.941V35.0152H151.844V29.2573H156V45.1456Z"
							fill={color}
						/>
					</g>
					<path
						d="M48.4759 24.624C48.4516 21.0566 47.2891 17.5898 45.1574 14.7276C45.1289 14.6681 45.0892 14.6147 45.0404 14.5702C43.6157 12.6676 41.884 11.0151 39.9163 9.68048C39.8648 9.63942 39.8107 9.60185 39.7542 9.56802V9.56802C36.7041 7.53858 33.2673 6.16029 29.6592 5.51949H29.6142C29.5906 5.51275 29.5656 5.51275 29.5421 5.51949V5.51949C28.6416 5.34856 27.6735 5.2271 26.7189 5.14613C26.6469 3.15785 26.2371 1.9298 25.7553 1.16507C25.6081 0.882482 25.4041 0.633207 25.1563 0.432766C24.9084 0.232325 24.6218 0.0850109 24.3145 0H24.1929H24.1119C23.804 0.0852019 23.517 0.232549 23.2684 0.432937C23.0198 0.633326 22.8149 0.882499 22.6665 1.16507C22.1802 1.9298 21.766 3.16235 21.7029 5.15063C12.3418 5.94234 4.54771 11.057 1.44086 17.9755C1.42315 18.0118 1.4081 18.0494 1.39583 18.0879C0.477033 20.1543 0.00155521 22.39 0 24.651C0 30.0086 2.60705 34.9973 7.34838 38.7174C7.02342 40.8109 7.22615 42.9522 7.93823 44.9477V44.9477C6.82156 48.5464 5.83097 53.1392 7.71309 57.0438C7.71391 57.0557 7.71391 57.0678 7.71309 57.0798C9.88339 61.5331 14.1339 62.7387 18.2449 63.8993C20.2018 64.3742 22.1067 65.0417 23.9318 65.892L23.9948 65.919H24.0353C24.0772 65.9234 24.1195 65.9234 24.1614 65.919H24.2289C24.3107 65.9199 24.3913 65.8998 24.4631 65.8606C26.2886 65.0007 28.1951 64.3241 30.1545 63.8408C32.4959 63.1795 34.8868 62.4913 36.9085 61.2182L36.967 61.1778C38.5744 60.1704 39.8637 58.7295 40.6863 57.0213C42.5909 53.1122 41.5868 48.5778 40.5332 45.0646C40.5257 45.04 40.5134 45.0171 40.4971 44.9971C41.5688 42.3971 41.2716 39.5991 41.132 38.6634C45.8688 34.9613 48.4759 29.9816 48.4759 24.624ZM47.4628 24.624C47.4618 26.0795 47.2541 27.5274 46.8459 28.9245C46.1261 27.4581 45.1996 26.1023 44.0948 24.8984C42.0461 22.6493 38.4214 19.8738 32.5409 18.7852C36.3987 17.3135 40.3881 16.2124 44.455 15.4969C46.3851 18.1518 47.4367 21.3429 47.4628 24.624V24.624ZM43.7841 14.5927C38.4983 15.5434 33.3543 17.1591 28.475 19.4014C28.1598 16.8509 27.0251 14.8446 25.5212 14.1114C25.5707 13.9314 25.6113 13.7605 25.6518 13.5896C30.1255 12.0881 34.7478 11.0717 39.439 10.5577C41.0746 11.6863 42.5381 13.0454 43.7841 14.5927V14.5927ZM37.8901 47.0619L37.6199 47.3003C36.6553 48.0543 35.5207 48.5609 34.315 48.7758H34.2564H34.1619H34.1348C31.6178 49.2256 28.3579 48.8882 24.391 47.7231H24.337H24.1389H24.0984C22.2915 48.2748 20.4375 48.6588 18.5601 48.8702H18.479C14.9624 49.2121 12.3148 48.5913 10.5723 46.9989C8.5506 45.2356 8.17237 42.4691 8.17237 40.5977C9.02851 42.2081 10.3062 43.5561 11.8691 44.4978C14.4581 46.0273 17.7226 46.2972 21.5814 45.357C21.8308 45.8357 22.2072 46.2366 22.6694 46.5158C23.1316 46.7951 23.6618 46.942 24.2019 46.9404V46.9404C24.7415 46.9422 25.2712 46.7953 25.7327 46.516C26.1942 46.2366 26.5697 45.8356 26.818 45.357C30.6768 46.3152 33.9457 46.0273 36.5303 44.4978C38.0953 43.5588 39.3736 42.2101 40.227 40.5977C40.263 42.4691 39.8848 45.2355 37.8901 47.0619ZM35.6387 60.8404C33.8922 61.7028 32.0561 62.3711 30.1635 62.8331C29.3002 62.0148 28.5587 61.0771 27.9617 60.0487C27.0611 58.4337 27.5114 56.6569 28.1823 54.9745C28.2949 54.6866 28.4299 54.3762 28.574 54.0523C29.1234 52.8063 29.7807 51.3038 29.5556 49.9138C30.2938 50.0029 31.0364 50.0494 31.7799 50.0533C32.5263 50.0558 33.2716 49.9986 34.0088 49.8824C34.2924 50.6831 33.8872 52.0596 33.5225 53.2966C33.2125 54.1505 33.026 55.0442 32.9687 55.9507C32.9675 56.924 33.2115 57.882 33.6781 58.7365C34.1447 59.591 34.8189 60.3145 35.6387 60.8404ZM24.2335 64.8889C23.504 64.3491 20.978 62.2664 20.4917 58.8611C20.0414 55.7662 21.3697 52.4014 24.4045 48.8522C25.7446 49.2354 27.107 49.5358 28.484 49.7519V49.7519C28.8442 50.8945 28.2093 52.3385 27.6465 53.6205C27.4979 53.9624 27.3583 54.2863 27.2412 54.5877C26.4983 56.4995 25.9625 58.5417 27.0791 60.5255C27.6251 61.4713 28.286 62.3462 29.0468 63.13C27.391 63.57 25.7785 64.1587 24.2289 64.8889H24.2335ZM36.026 43.6431C33.6035 45.0736 30.4607 45.2895 26.7054 44.2909C26.6392 44.269 26.5693 44.2611 26.4999 44.2677C26.4305 44.2742 26.3632 44.295 26.3023 44.3288C26.2413 44.3627 26.1881 44.4087 26.1459 44.4641C26.1037 44.5195 26.0734 44.5831 26.057 44.6508C25.9241 45.0285 25.6765 45.3554 25.3489 45.586C25.0212 45.8166 24.6297 45.9394 24.2289 45.9373C23.8249 45.9404 23.4301 45.816 23.1011 45.5817C22.772 45.3474 22.5253 45.0153 22.3963 44.6328C22.3792 44.5678 22.3488 44.507 22.3069 44.4543C22.2651 44.4017 22.2127 44.3583 22.1532 44.3269C22.0888 44.2924 22.0181 44.2714 21.9453 44.2652C21.8725 44.259 21.7992 44.2677 21.7299 44.2909C17.9837 45.285 14.8544 45.0691 12.4274 43.6431C10.527 42.4708 9.10636 40.6609 8.42002 38.5375C8.82976 37.7098 10.838 33.9492 15.3496 29.5767C15.8314 29.2978 21.9551 25.9511 33.1172 29.6037C37.5974 33.9537 39.6416 37.7548 40.0424 38.542C39.3471 40.6599 37.9223 42.4627 36.0215 43.6296L36.026 43.6431ZM20.915 20.8454C20.915 18.2679 21.856 16.0007 23.1348 15.1685C23.2739 15.0699 23.4253 14.9898 23.5851 14.9301C23.744 14.8702 23.9109 14.8339 24.0803 14.8221H24.2695C24.4416 14.8261 24.6119 14.858 24.7738 14.9166C24.9324 14.9691 25.0838 15.0417 25.224 15.1325C26.3632 15.8387 27.2457 17.6786 27.4484 19.8693C27.4834 20.1935 27.4999 20.5194 27.4979 20.8454C27.4979 20.8994 27.4979 20.9579 27.4979 21.0164C27.4901 21.8523 27.3751 22.6838 27.1557 23.4905C27.0599 23.8255 26.9441 24.1544 26.809 24.4756C26.2011 25.9196 25.2511 26.8687 24.1974 26.8687C23.1438 26.8687 22.1937 25.9241 21.5859 24.4801C21.4404 24.145 21.3215 23.7991 21.2302 23.4455C21.0088 22.5968 20.9027 21.7223 20.915 20.8454V20.8454ZM21.9821 26.8912C20.4588 26.9599 18.9482 27.2013 17.4794 27.611V27.611C18.4475 26.7878 19.5326 25.9376 20.7304 25.0829C21.0318 25.758 21.4562 26.3712 21.9821 26.8912V26.8912ZM26.3002 27.0352C26.8975 26.4906 27.3718 25.825 27.6915 25.0829C29.0423 26.059 30.2941 27.0532 31.4107 28.0293C29.735 27.5685 28.0265 27.2362 26.3002 27.0352ZM25.8814 12.438C26.2763 10.6423 26.5382 8.82006 26.6649 6.98596C27.5654 6.81052 28.4885 6.64408 29.4386 6.49114C32.4825 7.04085 35.404 8.1285 38.0657 9.70298C33.9275 10.2314 29.8481 11.1471 25.8814 12.438V12.438ZM23.4455 1.75436C23.6116 1.42911 23.87 1.16 24.1884 0.98064C24.5057 1.16146 24.7637 1.43019 24.9314 1.75436C25.2646 2.31665 25.6068 3.31529 25.6788 5.03817C25.6788 5.35305 25.6788 5.69043 25.6788 6.0548V6.15826C25.6788 6.48664 25.6518 6.82852 25.6293 7.20638C25.4661 9.09708 25.1651 10.9734 24.7287 12.8203C24.6567 13.1487 24.5846 13.4816 24.5036 13.828C24.3994 13.8117 24.2939 13.8042 24.1884 13.8055C24.0649 13.8076 23.9417 13.8166 23.8192 13.8325C23.7697 13.621 23.7156 13.4141 23.6706 13.2027C23.2564 11.447 22.9556 9.66643 22.7701 7.87214C22.7341 7.51227 22.707 7.17039 22.6935 6.84651C22.68 6.52263 22.6665 6.30671 22.662 6.0548C22.662 5.69043 22.662 5.35306 22.662 5.04267C22.7701 3.3153 23.1168 2.31665 23.4455 1.75436V1.75436ZM21.6804 6.12677C21.6804 6.43716 21.7029 6.76554 21.7255 7.10291C12.4859 9.613 6.76753 13.3197 3.8588 15.6498C7.42492 10.4812 13.9943 6.80152 21.6804 6.12677ZM2.28736 18.4703C2.64307 18.0879 4.64226 16.0187 8.59112 13.6615C12.7298 11.2383 17.1764 9.38328 21.811 8.14654C22.0172 9.97513 22.3329 11.7897 22.7566 13.5806C17.7584 15.494 13.1438 18.2866 9.13144 21.8261C5.07903 25.4967 3.01679 28.9155 2.1838 30.5619C1.37549 28.6464 0.968095 26.5859 0.98668 24.5072C1.00526 22.4285 1.44944 20.3756 2.29186 18.4748L2.28736 18.4703ZM2.73763 31.7494C3.368 30.328 7.8842 21.0928 21.6849 15.1055C20.5998 16.374 19.9064 18.4478 19.9064 20.8409C19.8957 21.9279 20.0475 23.0105 20.3566 24.0528C12.3419 29.6937 8.69018 35.798 7.68608 37.6918C5.64102 36.075 3.95441 34.0515 2.73313 31.7494H2.73763ZM8.59112 46.2432C8.94985 46.8178 9.38284 47.3426 9.87888 47.8041C10.7213 48.5652 11.718 49.136 12.8011 49.4775V49.4775C11.7412 49.8127 10.767 50.3745 9.94643 51.1239C8.94395 52.0882 8.2472 53.3255 7.94274 54.6821C7.27184 51.9021 7.82567 48.8702 8.56861 46.2432H8.59112ZM8.69018 56.7199C8.97835 49.9183 15.3496 50.0218 15.6288 50.0308C15.6764 50.0325 15.7238 50.0248 15.7684 50.0083V50.0083C16.1061 50.0083 16.4528 50.0353 16.804 50.0083C14.7148 51.6547 13.4495 53.562 13.0443 55.6988C12.7155 57.6241 13.0072 59.6041 13.8773 61.3532C11.716 60.431 9.86088 59.095 8.66767 56.7199H8.69018ZM15.3767 61.9425C15.0029 61.3712 13.49 58.8341 14.0574 55.8967C14.5076 53.616 16.0701 51.6052 18.7312 49.9183C20.117 49.7694 21.4896 49.5168 22.8376 49.1626C20.1765 52.5949 19.0463 55.9102 19.4966 59.0051C19.772 60.8035 20.5421 62.4901 21.7209 63.8768C20.6628 63.5079 19.5822 63.202 18.5195 62.9006C17.4569 62.5992 16.3718 62.2934 15.3767 61.9425ZM36.6428 60.2196C35.8462 59.8157 35.177 59.1992 34.7097 58.4386C34.2423 57.6779 33.9951 56.8027 33.9953 55.9102C34.0604 55.1099 34.2315 54.3218 34.5041 53.5665C34.9183 52.181 35.3371 50.755 35.0264 49.6664C35.8624 49.4633 36.6636 49.1374 37.4038 48.6993V48.6993C37.4038 52.5814 39.5426 54.2503 40.4341 54.7811C40.282 55.4156 40.0632 56.0324 39.7812 56.6209C39.0715 58.0818 37.9812 59.3248 36.6248 60.2196H36.6428ZM40.6457 53.7015C39.7677 53.0582 38.2188 51.4163 38.4529 47.9301L38.597 47.8041C39.0764 47.3646 39.4957 46.864 39.8443 46.3152C40.4656 48.5913 40.9744 51.2004 40.6277 53.7015H40.6457ZM40.7583 37.7053C39.7722 35.843 36.134 29.7612 28.0787 24.0977C28.4044 23.0446 28.5654 21.9476 28.556 20.8454C28.556 20.7375 28.556 20.625 28.556 20.5215C29.2629 20.1797 29.9924 19.8468 30.7443 19.5364C37.3047 20.3191 41.2086 23.2296 43.3293 25.5462C44.6345 26.9417 45.6655 28.5699 46.3686 30.346C45.157 33.2417 43.2185 35.7764 40.7403 37.7053H40.7583Z"
						fill={color}
					/>
					<path
						d="M17.4923 35.9365C15.9929 35.9365 14.6511 36.5933 14.1468 37.5739C14.0868 37.6934 14.0763 37.8316 14.1176 37.9588C14.1589 38.0859 14.2487 38.1917 14.3674 38.2532C14.4389 38.2884 14.5174 38.3069 14.5971 38.3072C14.6902 38.3074 14.7815 38.2819 14.861 38.2335C14.9405 38.185 15.005 38.1155 15.0473 38.0327C15.376 37.394 16.3982 36.9442 17.4923 36.9442C18.5865 36.9442 19.6086 37.394 19.9418 38.0327C19.9718 38.0919 20.0133 38.1446 20.0637 38.1877C20.1142 38.2309 20.1727 38.2636 20.2359 38.2841C20.2991 38.3046 20.3657 38.3124 20.4319 38.3071C20.4981 38.3018 20.5626 38.2835 20.6217 38.2532C20.7416 38.1917 20.8322 38.0851 20.8736 37.9569C20.915 37.8287 20.9037 37.6893 20.8423 37.5694C20.329 36.5933 18.9782 35.9365 17.4923 35.9365Z"
						fill={color}
					/>
					<path
						d="M30.942 35.9365C29.4426 35.9365 28.0963 36.5933 27.5965 37.5739C27.5656 37.6328 27.5467 37.6973 27.5411 37.7636C27.5355 37.8299 27.5432 37.8967 27.5637 37.9599C27.5843 38.0232 27.6173 38.0818 27.6608 38.1321C27.7043 38.1825 27.7575 38.2236 27.8171 38.2532C27.8885 38.2884 27.9671 38.3069 28.0468 38.3072C28.1398 38.3074 28.2312 38.2819 28.3107 38.2335C28.3901 38.185 28.4546 38.1155 28.497 38.0327C28.8257 37.394 29.8478 36.9442 30.942 36.9442C32.0361 36.9442 33.0582 37.394 33.3914 38.0327C33.4215 38.0919 33.4629 38.1446 33.5134 38.1877C33.5639 38.2309 33.6224 38.2636 33.6855 38.2841C33.7487 38.3046 33.8153 38.3124 33.8815 38.3071C33.9477 38.3018 34.0122 38.2835 34.0713 38.2532C34.1904 38.1908 34.2803 38.0842 34.3215 37.9563C34.3628 37.8285 34.3522 37.6895 34.292 37.5694C33.7832 36.5933 32.4369 35.9365 30.942 35.9365Z"
						fill={color}
					/>
				</g>
				<defs>
					<clipPath id="clip0_88_2755">
						<rect width="156" height="66" fill="white" />
					</clipPath>
				</defs>
			</svg>
		</Link>
	)
}

export default SvgLogo
