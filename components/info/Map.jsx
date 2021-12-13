import React, { useEffect, useRef } from 'react';

const Map = () => {
  const mapContainer = useRef();

  useEffect(() => {
    const options = {
      center: new window.kakao.maps.LatLng(37.62129, 127.025898),
      level: 3,
    };
    const map = new window.kakao.maps.Map(mapContainer.current, options);

    // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
    const mapTypeControl = new window.kakao.maps.MapTypeControl();

    // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
    // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
    map.addControl(mapTypeControl, window.kakao.maps.ControlPosition.TOPRIGHT);

    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    const zoomControl = new window.kakao.maps.ZoomControl();
    map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

    const markerPosition = new window.kakao.maps.LatLng(37.62129, 127.025898);

    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성합니다
    const iwContent =
      '<div style="padding:5px; text-align:center;">광진이화학</div>'; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다

    // 인포윈도우를 생성합니다
    const infowindow = new window.kakao.maps.InfoWindow({
      content: iwContent,
    });

    infowindow.open(map, marker);

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
  }, []);

  return (
    <div
      id="map"
      style={{ width: '100%', height: '400px', marginTop: '50px' }}
      ref={mapContainer}
    ></div>
  );
};

export default Map;
