<?xml version="1.0"?>
  <xsl:stylesheet version="1.0"
	 xmlns:xsl="http://www.w3.org/1999/XSL/Transform" >
	<xsl:output method="xml" media-type="image/svg+xml"
		encoding="iso-8859-1" indent="yes" />
	
    <xsl:template match="/root" xmlns="http://www.w3.org/2000/svg">
		<!-- on génére un groupe de figures qu'on intègrera dans notre svg -->
		<xsl:element name="g" >
			<xsl:apply-templates select="figure" />
		</xsl:element>
	</xsl:template>
	
	<!-- affichage des figures -->
	<xsl:template match="figure" xmlns="http://www.w3.org/2000/svg">
		<xsl:element name="{@type}" >
			<xsl:apply-templates select="attribut" />
		</xsl:element>
	</xsl:template>
	
	<!-- ajout des attributs -->
	<xsl:template match="attribut" xmlns="http://www.w3.org/2000/svg">
		<xsl:choose>
			<!-- balise title pour les images -->
			<xsl:when test="@nom= 'title'">
				<xsl:element name="title" >
					<xsl:value-of select="." />
				</xsl:element>
			</xsl:when>
			<!-- Pour le contenu d'un texte -->
			<xsl:when test="@nom= 'text'">
				<xsl:value-of select="." />
			</xsl:when>
			<!-- id des figures -->
			<xsl:when test="@nom= 'identifiant'">
				<xsl:attribute name="id">
					<xsl:value-of select="." />
				</xsl:attribute>
			</xsl:when>
			<xsl:otherwise>
				<!-- Si l'attribut possède une valeur -->
				<xsl:if test= ". !=''">
					<xsl:attribute name="{@nom}">
						<xsl:value-of select="." />
					</xsl:attribute>
				</xsl:if>
			</xsl:otherwise>
		</xsl:choose>
		
	</xsl:template>
	
  </xsl:stylesheet>

