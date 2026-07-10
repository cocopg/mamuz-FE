import "./create.css";

import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  IoChevronBack,
  IoEllipsisVertical,
  IoAdd,
  IoArrowUpOutline,
  IoSparkles,
  IoAlbumsOutline,
} from "react-icons/io5";

function Create() {
  const navigate = useNavigate();

  const fileRef = useRef(null);

  const [tab, setTab] = useState("내용");

  const [showImageMenu, setShowImageMenu] =
    useState(false);

  const [image, setImage] =
    useState(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    name: "",
    setting: "",
  });

  const tabs = [
    "내용",
    "인트로",
    "상세묘사",
    "캐릭터 소개",
  ];

  const changeValue = (key, value) => {
    setForm({
      ...form,
      [key]: value,
    });
  };

  const uploadImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(
      URL.createObjectURL(file)
    );

    setShowImageMenu(false);
  };

  const createImage = () => {
    setShowImageMenu(false);
    navigate("/generate");
  };

  return (
    <div className="create">

      {/* Header */}

      <header className="createHeader">

        <button
          className="backBtn"
          onClick={() => navigate(-1)}
        >
          <IoChevronBack />
        </button>

        <h2>제작</h2>

        <div className="headerRight">

          <button className="tempBtn">
            임시저장
          </button>

          <button className="saveBtn">
            저장
          </button>

          <button className="menuBtn">
            <IoEllipsisVertical />
          </button>

        </div>

      </header>

      {/* Tabs */}

      <div className="createTabs">

        {tabs.map((item) => (

          <button
            key={item}
            className={
              tab === item
                ? "tab active"
                : "tab"
            }
            onClick={() => setTab(item)}
          >
            {item}
          </button>

        ))}

      </div>

      <div className="createBody">

        <h1>
          OOO님의 캐릭터를
          <br />
          현실로 만들어 보세요
        </h1>

        {/* 제목 */}

        <div className="inputTitle">

          <div className="titleLeft">

            <div className="requiredDot" />

            <span>제목</span>

          </div>

          <small>
            {form.title.length}/20
          </small>

        </div>

        <input
          maxLength={20}
          value={form.title}
          placeholder="제목을 입력해주세요."
          onChange={(e) =>
            changeValue(
              "title",
              e.target.value
            )
          }
        />

        {/* 상세설명 */}

        <div className="inputTitle">

          <div className="titleLeft">

            <div className="requiredDot" />

            <span>상세 설명</span>

          </div>

          <small>
            {form.description.length}/1200
          </small>

        </div>

        <textarea
          rows={8}
          maxLength={1200}
          value={form.description}
          placeholder="성향, 관계, 세계관 등을 입력해주세요."
          onChange={(e) =>
            changeValue(
              "description",
              e.target.value
            )
          }
        />
                {/* 이미지 */}

        <div className="imageArea">

          {!image ? (

            <div
              className="imageCard"
              onClick={() =>
                setShowImageMenu(true)
              }
            >

              <div className="imageIcon">
                <IoAdd />
              </div>

              <h3>
                캐릭터 이미지를
                생성해주세요.
              </h3>

              <p>
                AI 생성 또는
                <br />
                내 PC 이미지를
                사용할 수 있습니다.
              </p>

            </div>

          ) : (

            <img
              src={image}
              alt=""
              className="previewImage"
              onClick={() =>
                setShowImageMenu(true)
              }
            />

          )}

        </div>

        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          hidden
          onChange={uploadImage}
        />

        {/* 이름 */}

        <div className="inputTitle">

          <div className="titleLeft">

            <div className="requiredDot" />

            <span>이름</span>

          </div>

          <small>
            {form.name.length}/10
          </small>

        </div>

        <input
          maxLength={10}
          value={form.name}
          placeholder="필요한 부르기 선택값"
          onChange={(e) =>
            changeValue(
              "name",
              e.target.value
            )
          }
        />

        {/* 설명 */}

        <div className="inputTitle">

          <div className="titleLeft">

            <div className="requiredDot" />

            <span>설명</span>

          </div>

          <small>
            {form.setting.length}/200
          </small>

        </div>

        <textarea
          rows={6}
          maxLength={200}
          value={form.setting}
          placeholder="캐릭터의 특징, 감정표현 등을 입력해주세요."
          onChange={(e) =>
            changeValue(
              "setting",
              e.target.value
            )
          }
        />

        <button
          className="createBtn"
        >
          캐릭터 생성
        </button>

      </div>

      {/* 이미지 선택 BottomSheet */}

      {showImageMenu && (

        <div
          className="modalOverlay"
          onClick={() =>
            setShowImageMenu(false)
          }
        >

          <div
            className="imageBottomSheet"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <div className="sheetHandle" />

            <div className="warningBox">

              <div className="warningTitle">
                ⚠️ 내 그림이나 사진이 아니라면 꼭 허락받고 쓰세요!
                <br />
                아니면 경고없이 삭제나 차단될 수 있어요.
              </div>

              <div className="exampleTitle">
                안되는 예시
              </div>

              <div className="exampleRow">

                <div className="exampleItem">
                  실존 인물
                </div>

                <div className="exampleItem">
                  연예인
                </div>

                <div className="exampleItem">
                  저작권 이미지
                </div>

                <div className="exampleItem">
                  음란물
                </div>

              </div>

            </div>
                        <button
              className="sheetItem"
              onClick={() => {
                setShowImageMenu(false);
                fileRef.current.click();
              }}
            >
              <div className="sheetIcon">
                  <IoArrowUpOutline/>
              </div>

              <span>
                내 기기에서 가져오기
              </span>

            </button>

            <button
              className="sheetItem"
              onClick={() => {
                createImage();
              }}
            >

              <div className="sheetIcon">
                  <IoAlbumsOutline/>
              </div>

              <span>
                이미지 생성하기
              </span>

            </button>

            <button
              className="sheetItem"
              onClick={() => {
                setShowImageMenu(false);

                navigate("/library");
              }}
            >

              <IoAlbumsOutline />

              <span>
                라이브러리에서 가져오기
              </span>

            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default Create;