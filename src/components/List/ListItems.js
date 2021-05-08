import React ,{useEffect}from 'react'
import {
    ListItemsWrapper,
    ListItem,
    ListItemRank,
    ListItemMainWrapper,
    ListItemImgWrapper,
    ListItemImg,
    ListItemDescWrapper,
    ListItemDescTitle,
    ListItemDescSub,
    ListItemDescType,
    ListItemDescStatus,
    ListItemDescCategories,
    ListItemDescCategory,
    ListItemScoreWrapper,
    ListItemBackWrapper,
    ListItemOverallSroce,
    ListItemOverallScoreBg,
    ListItemOverScoretxt,
    ListItemYourScore,
    ListItemYourScoreTitle,
    ListItemYourScoreMain,
    ListItemYourScoreBg,
    ListItemYourScoretxt,
    ListItemAddedBtn,
    ListItemAddBtn,
    ListDescTitleLink
} from './ListItems.styles'
import {FaPlus,FaCheck} from 'react-icons/fa'
const ListItems = () => {
    useEffect(() =>{
        try{
          window.scroll({
            top:0,
            left:0,
            behavior: 'smooth',
          });
        }
        catch (error) {
          window.scroll(0,0);
        }
      },[])
    return (
        <ListItemsWrapper>
            <ListItem>
                <ListItemRank>
                    #1
                </ListItemRank>
                <ListItemMainWrapper>
                    <ListItemImgWrapper>
                        <ListItemImg src='/images/top_img.jpg'/>
                    </ListItemImgWrapper>

                    <ListItemDescWrapper>
                        <ListDescTitleLink to="/list/anime/id">
                            <ListItemDescTitle> 5 Centimeters per Second </ListItemDescTitle>
                        </ListDescTitleLink>
                        <ListItemDescSub>
                            <ListItemDescType>
                                <span style={{color: "#666666"}}>Төрөл:</span> Бүрэн хэмжээний кино
                            </ListItemDescType>
                            <ListItemDescStatus>
                                <span style={{color: "#666666"}}>Төлөв:</span> Гарч дууссан
                            </ListItemDescStatus>
                        </ListItemDescSub>
                        
                        <ListItemDescCategories>
                            <ListItemDescCategory>Хайр дурлал</ListItemDescCategory>
                            <ListItemDescCategory>Инээдэм</ListItemDescCategory>
                        </ListItemDescCategories>
                    </ListItemDescWrapper>
                </ListItemMainWrapper>
                <ListItemBackWrapper>
                    <ListItemScoreWrapper>
                        <ListItemOverallSroce>
                            <ListItemOverallScoreBg src="/rank_bg.svg"/>
                            <ListItemOverScoretxt>
                                9.8
                            </ListItemOverScoretxt>

                        </ListItemOverallSroce>
                        <ListItemYourScore>
                            <ListItemYourScoreTitle>
                                Таны оноо
                            </ListItemYourScoreTitle>
                            <ListItemYourScoreMain>
                                    <ListItemYourScoreBg src="/rank_bg_dark.svg"/>
                                    <ListItemYourScoretxt>
                                        N/A
                                    </ListItemYourScoretxt>
                                </ListItemYourScoreMain>
                        </ListItemYourScore>
                    </ListItemScoreWrapper>
                    <ListItemAddBtn><FaPlus/></ListItemAddBtn>
                </ListItemBackWrapper>
            </ListItem>
            <ListItem>
                <ListItemRank>
                    #2
                </ListItemRank>
                <ListItemMainWrapper>
                    <ListItemImgWrapper>
                        <ListItemImg src='/images/aot.jpg'/>
                    </ListItemImgWrapper>

                    <ListItemDescWrapper>
                        <ListDescTitleLink>
                            <ListItemDescTitle> Attack on Titan Season 4 </ListItemDescTitle>
                        </ListDescTitleLink>
                        <ListItemDescSub>
                            <ListItemDescType>
                                <span style={{color: "#666666"}}>Төрөл:</span> 16 ангит
                            </ListItemDescType>
                            <ListItemDescStatus>
                                <span style={{color: "#666666"}}>Төлөв:</span> Гарч байгаа
                            </ListItemDescStatus>
                        </ListItemDescSub>
                        
                        <ListItemDescCategories>
                            <ListItemDescCategory>Тулаан</ListItemDescCategory>
                            <ListItemDescCategory>Нууцлагдмал</ListItemDescCategory>
                        </ListItemDescCategories>
                    </ListItemDescWrapper>
                </ListItemMainWrapper>
                <ListItemBackWrapper>
                    <ListItemScoreWrapper>
                        <ListItemOverallSroce>
                            <ListItemOverallScoreBg src="/rank_bg.svg"/>
                            <ListItemOverScoretxt>
                                9.6
                            </ListItemOverScoretxt>

                        </ListItemOverallSroce>
                        <ListItemYourScore>
                            <ListItemYourScoreTitle>
                                Таны оноо
                            </ListItemYourScoreTitle>
                            <ListItemYourScoreMain>
                                    <ListItemYourScoreBg src="/rank_bg_dark.svg"/>
                                    <ListItemYourScoretxt>
                                        9.2
                                    </ListItemYourScoretxt>
                                </ListItemYourScoreMain>
                        </ListItemYourScore>
                    </ListItemScoreWrapper>
                    <ListItemAddedBtn><FaCheck/></ListItemAddedBtn>
                </ListItemBackWrapper>
            </ListItem>
            <ListItem>
                <ListItemRank>
                    #3
                </ListItemRank>
                <ListItemMainWrapper>
                    <ListItemImgWrapper>
                        <ListItemImg src='/images/top_img.jpg'/>
                    </ListItemImgWrapper>

                    <ListItemDescWrapper>
                        <ListDescTitleLink>
                            <ListItemDescTitle> 5 Centimeters per Second </ListItemDescTitle>
                        </ListDescTitleLink>
                        <ListItemDescSub>
                            <ListItemDescType>
                                <span style={{color: "#666666"}}>Төрөл:</span> Бүрэн хэмжээний кино
                            </ListItemDescType>
                            <ListItemDescStatus>
                                <span style={{color: "#666666"}}>Төлөв:</span> Гарч дууссан
                            </ListItemDescStatus>
                        </ListItemDescSub>
                        
                        <ListItemDescCategories>
                            <ListItemDescCategory>Хайр дурлал</ListItemDescCategory>
                            <ListItemDescCategory>Инээдэм</ListItemDescCategory>
                        </ListItemDescCategories>
                    </ListItemDescWrapper>
                </ListItemMainWrapper>
                <ListItemBackWrapper>
                    <ListItemScoreWrapper>
                        <ListItemOverallSroce>
                            <ListItemOverallScoreBg src="/rank_bg.svg"/>
                            <ListItemOverScoretxt>
                                9.8
                            </ListItemOverScoretxt>

                        </ListItemOverallSroce>
                        <ListItemYourScore>
                            <ListItemYourScoreTitle>
                                Таны оноо
                            </ListItemYourScoreTitle>
                            <ListItemYourScoreMain>
                                    <ListItemYourScoreBg src="/rank_bg_dark.svg"/>
                                    <ListItemYourScoretxt>
                                        N/A
                                    </ListItemYourScoretxt>
                                </ListItemYourScoreMain>
                        </ListItemYourScore>
                    </ListItemScoreWrapper>
                    <ListItemAddBtn><FaPlus/></ListItemAddBtn>
                </ListItemBackWrapper>
            </ListItem>
            <ListItem>
                <ListItemRank>
                    #4
                </ListItemRank>
                <ListItemMainWrapper>
                    <ListItemImgWrapper>
                        <ListItemImg src='/images/aot.jpg'/>
                    </ListItemImgWrapper>

                    <ListItemDescWrapper>
                        <ListDescTitleLink>
                            <ListItemDescTitle> Attack on Titan Season 4 </ListItemDescTitle>
                        </ListDescTitleLink>
                        <ListItemDescSub>
                            <ListItemDescType>
                                <span style={{color: "#666666"}}>Төрөл:</span> 16 ангит
                            </ListItemDescType>
                            <ListItemDescStatus>
                                <span style={{color: "#666666"}}>Төлөв:</span> Гарч байгаа
                            </ListItemDescStatus>
                        </ListItemDescSub>
                        
                        <ListItemDescCategories>
                            <ListItemDescCategory>Тулаан</ListItemDescCategory>
                            <ListItemDescCategory>Нууцлагдмал</ListItemDescCategory>
                        </ListItemDescCategories>
                    </ListItemDescWrapper>
                </ListItemMainWrapper>
                <ListItemBackWrapper>
                    <ListItemScoreWrapper>
                        <ListItemOverallSroce>
                            <ListItemOverallScoreBg src="/rank_bg.svg"/>
                            <ListItemOverScoretxt>
                                9.6
                            </ListItemOverScoretxt>

                        </ListItemOverallSroce>
                        <ListItemYourScore>
                            <ListItemYourScoreTitle>
                                Таны оноо
                            </ListItemYourScoreTitle>
                            <ListItemYourScoreMain>
                                    <ListItemYourScoreBg src="/rank_bg_dark.svg"/>
                                    <ListItemYourScoretxt>
                                        9.2
                                    </ListItemYourScoretxt>
                                </ListItemYourScoreMain>
                        </ListItemYourScore>
                    </ListItemScoreWrapper>
                    <ListItemAddedBtn><FaCheck/></ListItemAddedBtn>
                </ListItemBackWrapper>
            </ListItem>
            <ListItem>
                <ListItemRank>
                    #5
                </ListItemRank>
                <ListItemMainWrapper>
                    <ListItemImgWrapper>
                        <ListItemImg src='/images/top_img.jpg'/>
                    </ListItemImgWrapper>

                    <ListItemDescWrapper>
                        <ListDescTitleLink>
                            <ListItemDescTitle> 5 Centimeters per Second </ListItemDescTitle>
                        </ListDescTitleLink>
                        <ListItemDescSub>
                            <ListItemDescType>
                                <span style={{color: "#666666"}}>Төрөл:</span> Бүрэн хэмжээний кино
                            </ListItemDescType>
                            <ListItemDescStatus>
                                <span style={{color: "#666666"}}>Төлөв:</span> Гарч дууссан
                            </ListItemDescStatus>
                        </ListItemDescSub>
                        
                        <ListItemDescCategories>
                            <ListItemDescCategory>Хайр дурлал</ListItemDescCategory>
                            <ListItemDescCategory>Инээдэм</ListItemDescCategory>
                        </ListItemDescCategories>
                    </ListItemDescWrapper>
                </ListItemMainWrapper>
                <ListItemBackWrapper>
                    <ListItemScoreWrapper>
                        <ListItemOverallSroce>
                            <ListItemOverallScoreBg src="/rank_bg.svg"/>
                            <ListItemOverScoretxt>
                                9.8
                            </ListItemOverScoretxt>

                        </ListItemOverallSroce>
                        <ListItemYourScore>
                            <ListItemYourScoreTitle>
                                Таны оноо
                            </ListItemYourScoreTitle>
                            <ListItemYourScoreMain>
                                    <ListItemYourScoreBg src="/rank_bg_dark.svg"/>
                                    <ListItemYourScoretxt>
                                        N/A
                                    </ListItemYourScoretxt>
                                </ListItemYourScoreMain>
                        </ListItemYourScore>
                    </ListItemScoreWrapper>
                    <ListItemAddBtn><FaPlus/></ListItemAddBtn>
                </ListItemBackWrapper>
            </ListItem>
            <ListItem>
                <ListItemRank>
                    #6
                </ListItemRank>
                <ListItemMainWrapper>
                    <ListItemImgWrapper>
                        <ListItemImg src='/images/aot.jpg'/>
                    </ListItemImgWrapper>

                    <ListItemDescWrapper>
                        <ListDescTitleLink>
                            <ListItemDescTitle> Attack on Titan Season 4 </ListItemDescTitle>
                        </ListDescTitleLink>
                        <ListItemDescSub>
                            <ListItemDescType>
                                <span style={{color: "#666666"}}>Төрөл:</span> 16 ангит
                            </ListItemDescType>
                            <ListItemDescStatus>
                                <span style={{color: "#666666"}}>Төлөв:</span> Гарч байгаа
                            </ListItemDescStatus>
                        </ListItemDescSub>
                        
                        <ListItemDescCategories>
                            <ListItemDescCategory>Тулаан</ListItemDescCategory>
                            <ListItemDescCategory>Нууцлагдмал</ListItemDescCategory>
                        </ListItemDescCategories>
                    </ListItemDescWrapper>
                </ListItemMainWrapper>
                <ListItemBackWrapper>
                    <ListItemScoreWrapper>
                        <ListItemOverallSroce>
                            <ListItemOverallScoreBg src="/rank_bg.svg"/>
                            <ListItemOverScoretxt>
                                9.6
                            </ListItemOverScoretxt>

                        </ListItemOverallSroce>
                        <ListItemYourScore>
                            <ListItemYourScoreTitle>
                                Таны оноо
                            </ListItemYourScoreTitle>
                            <ListItemYourScoreMain>
                                    <ListItemYourScoreBg src="/rank_bg_dark.svg"/>
                                    <ListItemYourScoretxt>
                                        9.2
                                    </ListItemYourScoretxt>
                                </ListItemYourScoreMain>
                        </ListItemYourScore>
                    </ListItemScoreWrapper>
                    <ListItemAddedBtn><FaCheck/></ListItemAddedBtn>
                </ListItemBackWrapper>
            </ListItem>
            <ListItem>
                <ListItemRank>
                    #7
                </ListItemRank>
                <ListItemMainWrapper>
                    <ListItemImgWrapper>
                        <ListItemImg src='/images/top_img.jpg'/>
                    </ListItemImgWrapper>

                    <ListItemDescWrapper>
                        <ListDescTitleLink>
                            <ListItemDescTitle> 5 Centimeters per Second </ListItemDescTitle>
                        </ListDescTitleLink>
                        <ListItemDescSub>
                            <ListItemDescType>
                                <span style={{color: "#666666"}}>Төрөл:</span> Бүрэн хэмжээний кино
                            </ListItemDescType>
                            <ListItemDescStatus>
                                <span style={{color: "#666666"}}>Төлөв:</span> Гарч дууссан
                            </ListItemDescStatus>
                        </ListItemDescSub>
                        
                        <ListItemDescCategories>
                            <ListItemDescCategory>Хайр дурлал</ListItemDescCategory>
                            <ListItemDescCategory>Инээдэм</ListItemDescCategory>
                        </ListItemDescCategories>
                    </ListItemDescWrapper>
                </ListItemMainWrapper>
                <ListItemBackWrapper>
                    <ListItemScoreWrapper>
                        <ListItemOverallSroce>
                            <ListItemOverallScoreBg src="/rank_bg.svg"/>
                            <ListItemOverScoretxt>
                                9.8
                            </ListItemOverScoretxt>

                        </ListItemOverallSroce>
                        <ListItemYourScore>
                            <ListItemYourScoreTitle>
                                Таны оноо
                            </ListItemYourScoreTitle>
                            <ListItemYourScoreMain>
                                    <ListItemYourScoreBg src="/rank_bg_dark.svg"/>
                                    <ListItemYourScoretxt>
                                        N/A
                                    </ListItemYourScoretxt>
                                </ListItemYourScoreMain>
                        </ListItemYourScore>
                    </ListItemScoreWrapper>
                    <ListItemAddBtn><FaPlus/></ListItemAddBtn>
                </ListItemBackWrapper>
            </ListItem>
            <ListItem>
                <ListItemRank>
                    #8
                </ListItemRank>
                <ListItemMainWrapper>
                    <ListItemImgWrapper>
                        <ListItemImg src='/images/aot.jpg'/>
                    </ListItemImgWrapper>

                    <ListItemDescWrapper>
                        <ListDescTitleLink>
                            <ListItemDescTitle> Attack on Titan Season 4 </ListItemDescTitle>
                        </ListDescTitleLink>
                        <ListItemDescSub>
                            <ListItemDescType>
                                <span style={{color: "#666666"}}>Төрөл:</span> 16 ангит
                            </ListItemDescType>
                            <ListItemDescStatus>
                                <span style={{color: "#666666"}}>Төлөв:</span> Гарч байгаа
                            </ListItemDescStatus>
                        </ListItemDescSub>
                        
                        <ListItemDescCategories>
                            <ListItemDescCategory>Тулаан</ListItemDescCategory>
                            <ListItemDescCategory>Нууцлагдмал</ListItemDescCategory>
                        </ListItemDescCategories>
                    </ListItemDescWrapper>
                </ListItemMainWrapper>
                <ListItemBackWrapper>
                    <ListItemScoreWrapper>
                        <ListItemOverallSroce>
                            <ListItemOverallScoreBg src="/rank_bg.svg"/>
                            <ListItemOverScoretxt>
                                9.6
                            </ListItemOverScoretxt>

                        </ListItemOverallSroce>
                        <ListItemYourScore>
                            <ListItemYourScoreTitle>
                                Таны оноо
                            </ListItemYourScoreTitle>
                            <ListItemYourScoreMain>
                                    <ListItemYourScoreBg src="/rank_bg_dark.svg"/>
                                    <ListItemYourScoretxt>
                                        9.2
                                    </ListItemYourScoretxt>
                                </ListItemYourScoreMain>
                        </ListItemYourScore>
                    </ListItemScoreWrapper>
                    <ListItemAddedBtn><FaCheck/></ListItemAddedBtn>
                </ListItemBackWrapper>
            </ListItem>
            <ListItem>
                <ListItemRank>
                    #9
                </ListItemRank>
                <ListItemMainWrapper>
                    <ListItemImgWrapper>
                        <ListItemImg src='/images/top_img.jpg'/>
                    </ListItemImgWrapper>

                    <ListItemDescWrapper>
                        <ListDescTitleLink>
                            <ListItemDescTitle> 5 Centimeters per Second </ListItemDescTitle>
                        </ListDescTitleLink>
                        <ListItemDescSub>
                            <ListItemDescType>
                                <span style={{color: "#666666"}}>Төрөл:</span> Бүрэн хэмжээний кино
                            </ListItemDescType>
                            <ListItemDescStatus>
                                <span style={{color: "#666666"}}>Төлөв:</span> Гарч дууссан
                            </ListItemDescStatus>
                        </ListItemDescSub>
                        
                        <ListItemDescCategories>
                            <ListItemDescCategory>Хайр дурлал</ListItemDescCategory>
                            <ListItemDescCategory>Инээдэм</ListItemDescCategory>
                        </ListItemDescCategories>
                    </ListItemDescWrapper>
                </ListItemMainWrapper>
                <ListItemBackWrapper>
                    <ListItemScoreWrapper>
                        <ListItemOverallSroce>
                            <ListItemOverallScoreBg src="/rank_bg.svg"/>
                            <ListItemOverScoretxt>
                                9.8
                            </ListItemOverScoretxt>

                        </ListItemOverallSroce>
                        <ListItemYourScore>
                            <ListItemYourScoreTitle>
                                Таны оноо
                            </ListItemYourScoreTitle>
                            <ListItemYourScoreMain>
                                    <ListItemYourScoreBg src="/rank_bg_dark.svg"/>
                                    <ListItemYourScoretxt>
                                        N/A
                                    </ListItemYourScoretxt>
                                </ListItemYourScoreMain>
                        </ListItemYourScore>
                    </ListItemScoreWrapper>
                    <ListItemAddBtn><FaPlus/></ListItemAddBtn>
                </ListItemBackWrapper>
            </ListItem>
            <ListItem>
                <ListItemRank>
                    #10
                </ListItemRank>
                <ListItemMainWrapper>
                    <ListItemImgWrapper>
                        <ListItemImg src='/images/aot.jpg'/>
                    </ListItemImgWrapper>

                    <ListItemDescWrapper>
                        <ListDescTitleLink>
                            <ListItemDescTitle> Attack on Titan Season 4 </ListItemDescTitle>
                        </ListDescTitleLink>
                        <ListItemDescSub>
                            <ListItemDescType>
                                <span style={{color: "#666666"}}>Төрөл:</span> 16 ангит
                            </ListItemDescType>
                            <ListItemDescStatus>
                                <span style={{color: "#666666"}}>Төлөв:</span> Гарч байгаа
                            </ListItemDescStatus>
                        </ListItemDescSub>
                        
                        <ListItemDescCategories>
                            <ListItemDescCategory>Тулаан</ListItemDescCategory>
                            <ListItemDescCategory>Нууцлагдмал</ListItemDescCategory>
                        </ListItemDescCategories>
                    </ListItemDescWrapper>
                </ListItemMainWrapper>
                <ListItemBackWrapper>
                    <ListItemScoreWrapper>
                        <ListItemOverallSroce>
                            <ListItemOverallScoreBg src="/rank_bg.svg"/>
                            <ListItemOverScoretxt>
                                9.6
                            </ListItemOverScoretxt>

                        </ListItemOverallSroce>
                        <ListItemYourScore>
                            <ListItemYourScoreTitle>
                                Таны оноо
                            </ListItemYourScoreTitle>
                            <ListItemYourScoreMain>
                                    <ListItemYourScoreBg src="/rank_bg_dark.svg"/>
                                    <ListItemYourScoretxt>
                                        9.2
                                    </ListItemYourScoretxt>
                                </ListItemYourScoreMain>
                        </ListItemYourScore>
                    </ListItemScoreWrapper>
                    <ListItemAddedBtn><FaCheck/></ListItemAddedBtn>
                </ListItemBackWrapper>
            </ListItem>
        </ListItemsWrapper>
    )
}

export default ListItems
