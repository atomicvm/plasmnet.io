import React from 'react';
import styled from 'styled-components';
import { Company, Products, Collaboration, Blogs, Community } from '../../database/links';
import { customMedia } from '../../styles/globalStyle';
import { theme } from '../../styles/theme';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <FooterContainer>
            <div className="footer-columns">
                <ul className="footer-column">
                    <h3>Company</h3>
                    {Company.map(company => (
                        <li key={company.description}>
                            <a href={company.link} rel="noopener noreferrer" target="_blank">
                                {company.description}
                            </a>
                        </li>
                    ))}
                </ul>

                <ul className="footer-column">
                    <h3>Repositories</h3>
                    {Products.map(product => (
                        <li key={product.description}>
                            <a href={product.link} rel="noopener noreferrer" target="_blank">
                                {product.description}
                            </a>
                        </li>
                    ))}
                </ul>

                <ul className="footer-column">
                    <h3>Collaboration</h3>
                    {Collaboration.map(collaboration => (
                        <li key={collaboration.description}>
                            <a href={collaboration.link} rel="noopener noreferrer" target="_blank">
                                {collaboration.description}
                            </a>
                        </li>
                    ))}
                </ul>

                <ul className="footer-column">
                    <h3>Blog</h3>
                    {Blogs.map(blog => (
                        <li key={blog.description}>
                            <a href={blog.link} rel="noopener noreferrer" target="_blank">
                                {blog.description}
                            </a>
                        </li>
                    ))}
                </ul>
                <ul className="footer-column">
                    <h3>Community</h3>
                    {Community.map(community => (
                        <li key={community.description}>
                            <a href={community.link} rel="noopener noreferrer" target="_blank">
                                {community.description}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="footer-div">
                <footer>?? 2019-{currentYear} Stake Technologies, Inc. All Rights Reserved.</footer>
            </div>
        </FooterContainer>
    );
};

export default Footer;

const FooterContainer = styled.div`
    .discussion {
        border-top: 2px groove black;
        border-bottom: 2px groove black;
        margin: 20px 20px;
        padding: 40px 0px;
        display: grid;
        justify-items: center;
        align-items: center;
        ${customMedia.lessThan('mobile')`
      width: auto;
    `}

        h2 {
            font-size: 38px;
            margin-bottom: 20px;
            margin-top: 0;
            ${customMedia.lessThan('mobile')`
        font-size: 28px;
      `}
        }
        .icons {
            display: flex;
            width: 370px;
            justify-content: space-evenly;
            ${customMedia.lessThan('mobile')`
        width: auto;
        justify-content: space-evenly
     `}
        }
        .twitter,
        .github,
        .telegram,
        .discord {
            height: 60px;
            margin: 0px 4px;
            ${customMedia.lessThan('mobile')`
        margin: 0px 8px;
      `}
        }
    }

    .footer-div {
        text-align: center;
        display: flex;
        justify-content: center;
    }

    footer {
        display: flex;
        justify-content: center;
        margin: 10px 0px;
        ${customMedia.lessThan('mobile')`
      width: 252px;
      text-align: center;
    `}
    }
    .footer-columns {
        padding-top: 30px;
        width: 90%;
        margin: auto;
        font-size: 14px;
        overflow: auto;
        display: grid;
        grid-template-columns: repeat(5, 1fr);

        ${customMedia.lessThan('tabletSmall')`
      grid-template-columns: repeat(2, 1fr);
    `}
        ul li {
            list-style: none;
            line-height: 2.5;
        }

        a {
            color: ${theme.colors.black};
            :hover {
                cursor: pointer;
            }
        }
    }
    .footer-column {
        text-align: center;
        ${customMedia.lessThan('mobile')`
      padding-left: 0px;;
    `}
    }
`;
