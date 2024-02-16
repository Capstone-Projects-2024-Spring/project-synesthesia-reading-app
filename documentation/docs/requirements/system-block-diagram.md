---
sidebar_position: 2
---

# System Block Diagram

```xml

<?xml version="1.0" encoding="UTF-8"?>
<mxfile host="app.diagrams.net" modified="2024-02-16T23:47:50.827Z" agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" version="23.1.5" etag="eA1dWnYfSsVgYHLo5tF5" type="google">
  <diagram name="Page-1" id="nGCGOZC3fUNOxBRFi9fQ">
    <mxGraphModel dx="3027" dy="580" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0">
      <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />
        <mxCell id="2" value="" style="sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.memory_card" vertex="1" parent="1">
          <mxGeometry x="381.88" y="1840" width="116.25" height="125" as="geometry" />
        </mxCell>
        <mxCell id="3" value="&lt;b&gt;&lt;font style=&quot;font-size: 15px;&quot;&gt;&amp;nbsp;Storage On Device&lt;/font&gt;&lt;/b&gt;" style="text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" vertex="1" parent="1">
          <mxGeometry x="388.13" y="1890" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="4" value="" style="ellipse;whiteSpace=wrap;html=1;fillColor=none;direction=south;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="508.13" y="2095" width="110" height="160" as="geometry" />
        </mxCell>
        <mxCell id="5" value="" style="endArrow=classic;html=1;rounded=0;entryX=0.79;entryY=1.01;entryDx=0;entryDy=0;entryPerimeter=0;" edge="1" source="4" target="2" parent="1">
          <mxGeometry width="50" height="50" relative="1" as="geometry">
            <mxPoint x="308.13" y="2037.5" as="sourcePoint" />
            <mxPoint x="358.13" y="1987.5" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="6" value="" style="whiteSpace=wrap;html=1;aspect=fixed;fillColor=none;dashed=1;dashPattern=8 8;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="258.13" y="1390" width="670" height="670" as="geometry" />
        </mxCell>
        <mxCell id="7" value="&lt;b&gt;&lt;font style=&quot;font-size: 40px;&quot;&gt;Client&lt;/font&gt;&lt;/b&gt;" style="text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" vertex="1" parent="1">
          <mxGeometry x="320" y="1337.5" width="60" height="30" as="geometry" />
        </mxCell>
        <mxCell id="8" value="&lt;b&gt;&lt;font style=&quot;font-size: 40px;&quot;&gt;Server&lt;/font&gt;&lt;/b&gt;" style="text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" vertex="1" parent="1">
          <mxGeometry x="1090" y="1337.5" width="60" height="30" as="geometry" />
        </mxCell>
        <mxCell id="9" value="" style="rounded=0;whiteSpace=wrap;html=1;fillColor=none;dashed=1;strokeWidth=2;dashPattern=8 8;" vertex="1" parent="1">
          <mxGeometry x="1030" y="1390" width="820" height="360" as="geometry" />
        </mxCell>
        <mxCell id="10" value="" style="shape=image;verticalLabelPosition=bottom;labelBackgroundColor=default;verticalAlign=top;aspect=fixed;imageAspect=0;image=https://assets.stickpng.com/images/62a4c87afdee15d2905007c7.png;" vertex="1" parent="1">
          <mxGeometry x="1120.01" y="1465" width="129.83" height="135" as="geometry" />
        </mxCell>
        <mxCell id="11" value="User&#39;s color profile, uploaded documents, and annotations can be saved to their account the cloud and downloaded to any device" style="text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" vertex="1" parent="1">
          <mxGeometry x="1500" y="1560" width="165.04" height="110" as="geometry" />
        </mxCell>
        <mxCell id="12" value="&lt;b&gt;&lt;font style=&quot;font-size: 16px;&quot;&gt;Postgres Database&lt;/font&gt;&lt;/b&gt;" style="text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" vertex="1" parent="1">
          <mxGeometry x="1517.5" y="1420" width="110" height="30" as="geometry" />
        </mxCell>
        <mxCell id="13" value="" style="shape=image;verticalLabelPosition=bottom;labelBackgroundColor=default;verticalAlign=top;aspect=fixed;imageAspect=0;image=https://www.logo.wine/a/logo/PostgreSQL/PostgreSQL-Logo.wine.svg;" vertex="1" parent="1">
          <mxGeometry x="1460" y="1440" width="240" height="160" as="geometry" />
        </mxCell>
        <mxCell id="14" value="&lt;b&gt;&lt;font style=&quot;font-size: 16px;&quot;&gt;Laravel Backend&lt;/font&gt;&lt;/b&gt;" style="text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" vertex="1" parent="1">
          <mxGeometry x="1129" y="1635" width="110" height="30" as="geometry" />
        </mxCell>
        <mxCell id="15" value="" style="verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.mobile;pointerEvents=1;" vertex="1" parent="1">
          <mxGeometry x="320" y="1430" width="120" height="170" as="geometry" />
        </mxCell>
        <mxCell id="16" value="&lt;b&gt;Read a document in your &lt;font color=&quot;#00cc00&quot;&gt;mental&lt;/font&gt; &lt;font color=&quot;#7f00ff&quot;&gt;colors&lt;/font&gt; from any device&lt;/b&gt;" style="text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" vertex="1" parent="1">
          <mxGeometry x="340" y="1475" width="80" height="60" as="geometry" />
        </mxCell>
        <mxCell id="17" value="&lt;b&gt;&lt;font style=&quot;font-size: 18px;&quot;&gt;Display&lt;/font&gt;&lt;/b&gt;" style="text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" vertex="1" parent="1">
          <mxGeometry x="350" y="1600" width="60" height="30" as="geometry" />
        </mxCell>
        <mxCell id="18" value="" style="shape=image;verticalLabelPosition=bottom;labelBackgroundColor=default;verticalAlign=top;aspect=fixed;imageAspect=0;image=https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png;" vertex="1" parent="1">
          <mxGeometry x="518.13" y="1620" width="150" height="150" as="geometry" />
        </mxCell>
        <mxCell id="19" value="&lt;b&gt;&lt;font style=&quot;font-size: 16px;&quot;&gt;React Frontend&lt;/font&gt;&lt;/b&gt;" style="text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" vertex="1" parent="1">
          <mxGeometry x="563.13" y="1580" width="60" height="30" as="geometry" />
        </mxCell>
        <mxCell id="20" value="" style="ellipse;whiteSpace=wrap;html=1;fillColor=none;direction=south;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="306.87" y="2075" width="110" height="160" as="geometry" />
        </mxCell>
        <mxCell id="21" value="" style="endArrow=classic;html=1;rounded=0;exitX=0;exitY=0.5;exitDx=0;exitDy=0;entryX=0.239;entryY=0.866;entryDx=0;entryDy=0;entryPerimeter=0;" edge="1" source="20" target="6" parent="1">
          <mxGeometry width="50" height="50" relative="1" as="geometry">
            <mxPoint x="800" y="1970" as="sourcePoint" />
            <mxPoint x="850" y="1920" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="22" value="" style="sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.capabilities" vertex="1" parent="1">
          <mxGeometry x="750" y="1737.6" width="111.58" height="84.8" as="geometry" />
        </mxCell>
        <mxCell id="23" value="Machine learning models adjust the word-coloring algorithm with input from the user" style="text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" vertex="1" parent="1">
          <mxGeometry x="750" y="1830" width="120" height="90" as="geometry" />
        </mxCell>
        <mxCell id="24" value="" style="endArrow=classic;startArrow=classic;html=1;rounded=0;strokeWidth=3;fontStyle=1" edge="1" source="18" parent="1">
          <mxGeometry width="50" height="50" relative="1" as="geometry">
            <mxPoint x="518" y="1658" as="sourcePoint" />
            <mxPoint x="450" y="1600" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="25" value="" style="endArrow=classic;startArrow=classic;html=1;rounded=0;entryX=0;entryY=0.75;entryDx=0;entryDy=0;strokeWidth=3;" edge="1" target="18" parent="1">
          <mxGeometry width="50" height="50" relative="1" as="geometry">
            <mxPoint x="430" y="1830" as="sourcePoint" />
            <mxPoint x="870" y="1600" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="26" value="" style="endArrow=classic;startArrow=classic;html=1;rounded=0;exitX=0.25;exitY=0;exitDx=0;exitDy=0;strokeWidth=3;" edge="1" source="23" target="18" parent="1">
          <mxGeometry width="50" height="50" relative="1" as="geometry">
            <mxPoint x="820" y="1660" as="sourcePoint" />
            <mxPoint x="870" y="1600" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="27" value="" style="endArrow=classic;startArrow=classic;html=1;rounded=0;strokeWidth=3;" edge="1" parent="1">
          <mxGeometry width="50" height="50" relative="1" as="geometry">
            <mxPoint x="1260" y="1515" as="sourcePoint" />
            <mxPoint x="1470" y="1515" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="28" value="" style="endArrow=classic;startArrow=classic;html=1;rounded=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;exitX=1;exitY=0.5;exitDx=0;exitDy=0;strokeWidth=3;" edge="1" source="18" target="10" parent="1">
          <mxGeometry width="50" height="50" relative="1" as="geometry">
            <mxPoint x="1000" y="1620" as="sourcePoint" />
            <mxPoint x="1050" y="1570" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="29" value="A user&#39;s uploaded documents and their annotations" style="text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" vertex="1" parent="1">
          <mxGeometry x="420" y="2280" width="75" height="110" as="geometry" />
        </mxCell>
        <mxCell id="30" value="A user&#39;s color profile" style="text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" vertex="1" parent="1">
          <mxGeometry x="518.13" y="2110" width="90" height="120" as="geometry" />
        </mxCell>
        <mxCell id="31" value="" style="ellipse;whiteSpace=wrap;html=1;fillColor=none;direction=south;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="402.5" y="2260" width="110" height="160" as="geometry" />
        </mxCell>
        <mxCell id="32" value="" style="endArrow=classic;html=1;rounded=0;exitX=0;exitY=0.5;exitDx=0;exitDy=0;entryX=0.298;entryY=0.866;entryDx=0;entryDy=0;entryPerimeter=0;" edge="1" source="31" target="6" parent="1">
          <mxGeometry width="50" height="50" relative="1" as="geometry">
            <mxPoint x="860" y="2140" as="sourcePoint" />
            <mxPoint x="910" y="2090" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="33" value="" style="rounded=0;whiteSpace=wrap;html=1;fillColor=none;dashed=1;dashPattern=8 8;strokeWidth=2;strokeColor=#FF0000;" vertex="1" parent="1">
          <mxGeometry x="498.13" y="2110" width="551.87" height="140" as="geometry" />
        </mxCell>
        <mxCell id="34" value="&lt;b&gt;&lt;font style=&quot;font-size: 30px;&quot;&gt;Color Profile&lt;/font&gt;&lt;/b&gt;" style="text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" vertex="1" parent="1">
          <mxGeometry x="825.5" y="2260" width="240" height="30" as="geometry" />
        </mxCell>
        <mxCell id="35" value="&lt;b&gt;&lt;font style=&quot;font-size: 22px;&quot;&gt;&lt;font color=&quot;#ff0000&quot;&gt;A &lt;/font&gt;&lt;font color=&quot;#ff00ff&quot;&gt;b &lt;/font&gt;&lt;font color=&quot;#7f00ff&quot;&gt;c&lt;/font&gt;&lt;/font&gt;&lt;/b&gt;" style="text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" vertex="1" parent="1">
          <mxGeometry x="730" y="2149.5" width="60" height="30" as="geometry" />
        </mxCell>
        <mxCell id="36" value="colors of each letter" style="text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" vertex="1" parent="1">
          <mxGeometry x="730" y="2179.5" width="60" height="30" as="geometry" />
        </mxCell>
        <mxCell id="37" value="" style="sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#000000;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.book_journal;" vertex="1" parent="1">
          <mxGeometry x="870" y="2130.5" width="41" height="49" as="geometry" />
        </mxCell>
        <mxCell id="38" value="Dictionary of saved word colors" style="text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" vertex="1" parent="1">
          <mxGeometry x="825.5" y="2200" width="130" height="30" as="geometry" />
        </mxCell>
        <mxCell id="39" value="The word-coloring algorithm and the machine learning models for calibrating it" style="text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" vertex="1" parent="1">
          <mxGeometry x="320" y="2090" width="83.74" height="130" as="geometry" />
        </mxCell>
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>


```
