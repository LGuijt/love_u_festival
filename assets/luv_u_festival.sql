-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Gegenereerd op: 12 jun 2025 om 23:21
-- Serverversie: 10.4.32-MariaDB
-- PHP-versie: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `luv_u_festival`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `acts`
--

CREATE TABLE `acts` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `podium` int(11) NOT NULL,
  `day` int(11) NOT NULL,
  `start_time` int(11) NOT NULL,
  `end_time` int(11) NOT NULL,
  `short_en` varchar(255) NOT NULL,
  `short_nl` varchar(255) NOT NULL,
  `extra_info` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Gegevens worden geëxporteerd voor tabel `acts`
--

INSERT INTO `acts` (`id`, `name`, `podium`, `day`, `start_time`, `end_time`, `short_en`, `short_nl`, `extra_info`) VALUES
(2, 'Armin van Buren', 0, 0, 1030, 1200, 'trance icon', 'trance icoon', 2),
(3, 'Kensington', 0, 0, 1230, 1400, 'indie rock anthems', 'indie rock anthems', 5),
(4, 'De Staat', 0, 0, 1430, 1630, 'experimental rock innovators', 'experimentele rock innovators', 6),
(5, 'Navarone', 0, 0, 1700, 1830, 'hard-hitting rock four-piece', 'hard-hitting rock four-piece', 8),
(6, 'Dotan', 0, 0, 1915, 2115, 'folk-pop singer-songwriter', 'folk-pop singer-songwriter', 9),
(7, 'Froukje', 0, 0, 2200, 2400, 'candid pop songwriter', 'candid pop songwriter', 11),
(8, 'Talent set 1', 1, 0, 1000, 1100, 'A spotlight on local talent', 'Een kijkje op lokaal talent', 1),
(9, 'talent set 2', 1, 0, 1130, 1300, 'A spotlight on local talent', 'Een kijkje naar lokaal talent', 1),
(10, 'Talent set 3', 1, 0, 1330, 1500, '', '', 1),
(11, 'Talent set 4', 1, 0, 1530, 1700, '', '', 1),
(14, 'Talent set 5', 1, 0, 1730, 1830, '', '', 1),
(15, 'Talent set 6', 1, 0, 1915, 2045, '', '', 1),
(16, 'Talent set 7', 1, 0, 2130, 2300, '', '', 1),
(17, 'Comedy', 2, 0, 1215, 1300, '', '', 1),
(18, 'Lecture', 2, 0, 1345, 1430, '', '', 1),
(19, 'Theater', 2, 0, 1515, 1645, '', '', 1),
(20, 'Movie', 2, 0, 1730, 1930, '', '', 1),
(21, 'Performance', 2, 0, 2015, 2115, '', '', 1),
(22, 'Illusionist', 2, 0, 2200, 2300, '', '', 1),
(23, 'DJ set 1', 3, 0, 1000, 1100, '', '', 1),
(24, 'DJ set 2', 3, 0, 1100, 1230, '', '', 1),
(25, 'DJ set 3', 3, 0, 1230, 1400, '', '', 1),
(26, 'DJ set 4', 3, 0, 1400, 1530, '', '', 1),
(27, 'DJ set 5', 3, 0, 1530, 1730, '', '', 1),
(28, 'DJ set 6', 3, 0, 1730, 1930, '', '', 1),
(29, 'DJ set 7', 3, 0, 1930, 2130, '', '', 1),
(30, 'DJ set 8', 3, 0, 2130, 2400, '', '', 1),
(31, 'Martin Garrix', 0, 1, 1100, 1300, 'EDM superstar', 'EDM super ster', 3),
(32, 'Within Temptation', 0, 1, 1345, 1545, 'symphonic metal pioneers', 'symphonische metal pionieren', 4),
(33, 'Chef\'Special', 0, 1, 1630, 1830, 'genre-blending funk-pop', 'genre-blending funk-pop', 7),
(34, 'Eefje de Visser', 0, 1, 1915, 2115, 'atmospheric indie-pop', 'atmospherische indie-pop', 10),
(35, 'Spinvis', 0, 1, 2200, 2400, 'Poetic lo-fi surrealist in pop form', 'Poetische lo-fi surrealist in pop vorm', 12),
(36, 'Talent set 1', 1, 1, 1000, 1100, '', '', 1),
(37, 'Talent set 2', 1, 1, 1130, 1300, '', '', 1),
(38, 'Talent set 3', 1, 1, 1330, 1500, '', '', 1),
(39, 'Talent set 4', 1, 1, 1530, 1730, '', '', 1),
(40, 'Talent set 5', 1, 1, 1815, 1945, '', '', 1),
(41, 'Talent set 6', 1, 1, 2030, 2230, '', '', 1),
(42, 'Comedy', 2, 1, 1200, 1245, '', '', 1),
(43, 'Lecture', 2, 1, 1330, 1430, '', '', 1),
(44, 'Theater', 2, 1, 1530, 1630, '', '', 1),
(45, 'Movie', 2, 1, 1730, 1930, '', '', 1),
(46, 'Magic Show', 2, 1, 2015, 2145, '', '', 1),
(47, 'DJ set 1', 3, 1, 1000, 1030, '', '', 1),
(48, 'DJ set 2', 3, 1, 1030, 1230, '', '', 1),
(49, 'DJ set 3', 3, 1, 1230, 1330, '', '', 1),
(50, 'DJ set 4 ', 3, 1, 1330, 1530, '', '', 1),
(51, 'DJ set 5', 3, 1, 1530, 1700, '', '', 1),
(52, 'DJ set 6', 3, 1, 1700, 1830, '', '', 1),
(53, 'DJ set 7', 3, 1, 1830, 2100, '', '', 1),
(54, 'DJ set 8', 3, 1, 2100, 2400, '', '', 1);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `acts_extra`
--

CREATE TABLE `acts_extra` (
  `id` int(11) NOT NULL,
  `description_en` varchar(2000) NOT NULL,
  `description_nl` varchar(2000) NOT NULL,
  `img` varchar(255) NOT NULL,
  `video` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Gegevens worden geëxporteerd voor tabel `acts_extra`
--

INSERT INTO `acts_extra` (`id`, `description_en`, `description_nl`, `img`, `video`) VALUES
(1, 'No desciption available yet', 'Nog geen beschrijving beschikbaar', '-', '-'),
(2, 'Five-time “World’s No. 1 DJ” and trance icon, Armin delivers euphoric, high-energy sets that have headlined festivals from Tomorrowland to Ultra. His uplifting melodies and impeccable mixing keep crowds dancing for hours.', 'Armin, vijfvoudig “World’s No. 1 DJ” en trance-icoon, levert euforische, energieke sets die headliner zijn geweest op festivals van Tomorrowland tot Ultra. Zijn opzwepende melodieën en onberispelijke mix zorgen ervoor dat het publiek urenlang kan dansen.', 'armin.png', 'https://www.youtube.com/embed/TxvpctgU_s8?si=nNwAk6g9Ldaz0Hm5'),
(3, 'Broke through as a teenager with “Animals,” Martin Garrix has become one of the biggest names in EDM. His anthemic big-room tracks and stadium-sized drops make him a festival favorite across Europe.', 'Martin Garrix brak als tiener door met \"Animals\" en is uitgegroeid tot een van de grootste namen in de EDM. Zijn anthem big-room tracks en stadiongrote drops maken hem een ​​festivalfavoriet in heel Europa.', 'martin.png', 'https://www.youtube.com/embed/Zv1QV6lrc_Y?si=g68Si5fTdWCSG2Ai'),
(4, 'Symphonic metal pioneers fronted by Sharon den Adel. Their cinematic soundscapes and operatic vocals (think “Ice Queen,” “Mother Earth”) translate into dramatic, visually stunning festival performances.', 'Pioniers van de symfonische metal, met Sharon den Adel als frontvrouw. Hun filmische soundscapes en operazang (denk aan \"Ice Queen\", \"Mother Earth\") vertalen zich naar dramatische, visueel verbluffende festivaloptredens.', 'wt.png', 'https://www.youtube.com/embed/iQVei5C2N4E?si=h1umvhLmbyUvdIZJ'),
(5, 'Rotterdam-born indie rock quintet known for soaring choruses and driving guitar riffs. Hits like “Streets” and “Riddles” showcase their knack for arena-ready hooks and emotionally charged lyricism.', 'Het in Rotterdam geboren indierockkwintet staat bekend om zijn meeslepende refreinen en opzwepende gitaarriffs. Hits als \"Streets\" en \"Riddles\" tonen hun talent voor arenaklare hooks en emotioneel geladen teksten.', 'kensignton.png', 'https://www.youtube.com/embed/IH77eOyV95o?si=Foyb5AwPE5TTQk-K'),
(6, 'Experimental rock outfit from Nijmegen, blending funky grooves with angular guitar work and theatrical stagecraft. Tracks like “Witch Doctor” and “Down Town” highlight their genre-bending approach and infectious energy.', 'Experimentele rockformatie uit Nijmegen, die funky grooves combineert met hoekige gitaarpartijen en theatrale podiumkunst. Nummers als \"Witch Doctor\" en \"Down Town\" benadrukken hun genre-overschrijdende aanpak en aanstekelijke energie.', 'destaat.png', 'https://www.youtube.com/embed/0ttGgIQpAUc?si=piSqFPxxeA0GIZR8'),
(7, 'A four-piece from Haarlem mixing funk, pop, rock and hip-hop. Their upbeat, genre-fluid sound on songs like “Amigo” and “In Your Arms” makes for joyous, dance-floor-friendly live shows.', 'Een vierkoppige band uit Haarlem die funk, pop, rock en hiphop mixt. Hun vrolijke, genre-vloeiende sound op nummers als \"Amigo\" en \"In Your Arms\" zorgt voor vrolijke, dansvloervriendelijke liveshows.', 'cs.png', 'https://www.youtube.com/embed/l3jRIr44lss?si=7gV-NmmpMdb8XvWR'),
(8, 'Utrecht’s hard-hitting rock four-piece, delivering riff-driven anthems and dynamic vocals. With a live reputation for raw intensity, they’re tailor-made for late-night main stages.', 'De hard-hitting vierkoppige rockformatie uit Utrecht, die riffgedreven anthems en dynamische vocalen levert. Met een live reputatie voor pure intensiteit zijn ze perfect geschikt voor de late night mainstages.', 'navarone.png', 'https://www.youtube.com/embed/EvLpaCSnc4k?si=I41sxvpzawZeEpiN'),
(9, 'Folk-pop singer-songwriter whose intimate voice and acoustic arrangements (notably on “Home”) have earned him platinum sales and sell-out shows. His heartfelt storytelling connects deeply on festival acoustic stages.', 'Folkpop singer-songwriter wiens intieme stem en akoestische arrangementen (met name op \"Home\") hem platina-verkopen en uitverkochte concerten hebben opgeleverd. Zijn oprechte verhalen komen goed tot hun recht op akoestische festivalpodia.', 'dotan.png', 'https://www.youtube.com/embed/FZEuqzW16Nw?si=uIUh5SR4jjl5vrWJ'),
(10, 'Indie-pop artist crafting atmospheric, electronic-tinged songs. Her hypnotic vocals and lush production (as heard on “Ongeveer”) create a dreamlike vibe perfect for twilight festival slots.', 'Indiepopartiest die sfeervolle, elektronisch getinte nummers maakt. Haar hypnotiserende zang en weelderige productie (zoals te horen op \"Ongeveer\") creëren een dromerige sfeer, perfect voor een avondje uit op een festival.', 'eefje.png', 'https://www.youtube.com/embed/6IlLJNmLDMg?si=NFeX5B5V0wkGhB5I'),
(11, 'Breakthrough pop singer Froukje Veenstra combines candid lyrics with catchy, synth-driven hooks. Since her 2021 debut, she’s become a voice of her generation—ideal for mid-day festival stages.', '\r\nDe doorbraakpopzangeres Froukje Veenstra combineert openhartige teksten met pakkende, synthgedreven hooks. Sinds haar debuut in 2021 is ze uitgegroeid tot een stem van haar generatie – ideaal voor op festivals halverwege de dag.', 'froukje.png', 'https://www.youtube.com/embed/g4PlReX9e-E?si=5uBkpDjrD66366Zx'),
(12, 'Erik de Jong performs under the moniker Spinvis, crafting poetic, collage-like songs that blend spoken-word snippets, lo-fi electronics and wistful pop. Since his debut album in 2002—recorded in his attic—he’s become a fixture of Dutch indie, renowned for narratives that feel both intimate and surreal. His live shows turn everyday observations into shared, dreamlike experiences.', 'Erik de Jong treedt op onder de naam Spinvis en maakt poëtische, collageachtige nummers die spoken-word fragmenten, lo-fi elektronica en weemoedige pop combineren. Sinds zijn debuutalbum uit 2002 – opgenomen op zijn zolder – is hij een begrip geworden in de Nederlandse indie, bekend om zijn verhalen die zowel intiem als surrealistisch aanvoelen. Zijn liveshows veranderen alledaagse observaties in gedeelde, dromerige ervaringen.', 'spinvis', 'https://www.youtube.com/embed/F3ZTrGWSLf4?si=pfHqXHu8rsUDrUrg');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `text`
--

CREATE TABLE `text` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` int(11) NOT NULL,
  `text_nl` varchar(5000) NOT NULL,
  `text_en` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Gegevens worden geëxporteerd voor tabel `text`
--

INSERT INTO `text` (`id`, `name`, `type`, `text_nl`, `text_en`) VALUES
(3, 'home', 1, 'Home & Info', 'Home & Info'),
(4, 'algemeen_contact', 2, 'Algemeen & Contact', 'General & Contact'),
(5, 'algemeen_text', 4, 'Het ❤️U Festival is voor (nieuwe) studenten in de regio Utrecht en is een aanvulling op UIT.', 'The ❤️U Festival is for (new) students in the region of Utrecht and is an addition to UIT'),
(6, 'adres', 3, 'Adres', 'Address'),
(7, 'adres_text_1', 4, 'Locatie: Strijkviertel, Utrecht', 'Location: Strijkviertel, Utrecht'),
(8, 'adres_text_2', 4, 'Navigatieadres: Strijkviertelweg, Utrecht', 'Navigation Address: Strijkviertelweg, Utrecht'),
(9, 'datum_tijd', 3, 'Datum & Openingstijden', 'Date & Opening Times'),
(10, 'datum_text', 4, 'Zaterdag 6 september 2025 - 12:00 tot 23:00 uur', 'Saterday, september 6th - 12:00 till 23:00'),
(11, 'bereikbaarheid', 2, 'Bereikbaarheid', 'Accessibility '),
(12, 'fiets', 3, 'Fiets', 'Bike'),
(13, 'fiets_text', 4, 'Er is een grote gratis fietsenstalling aanwezig waar je jouw fiets de gehele dag kunt stallen.', 'There is a grand free bikestall on the premises, where you can store your bike the whole day'),
(14, 'auto', 3, 'Auto', 'Car'),
(15, 'auto_text', 4, 'Je kunt een parkingticket aanschaffen. Parkeren kan op P+R Papendorp, volg hiervoor de borden \'P online ticket\'. Heb je geen ticket van te voren gekocht? Dan kun je bij de parkeerwachter op locatie een parkeerticket aanschaffen (PIN ONLY). Let wel op: VOL=VOL.', 'You can buy a parking ticket. Parking is at P+R Papendorp, follow the signs \'P online ticket\'. Haven\'t bought a ticket up front? You can buy one on location (PIN ONLY)\r\nAttention: FULL=FULL'),
(16, 'ov', 3, 'OV', 'Public Transport'),
(17, 'ov_text', 4, 'Kom je met het openbaar vervoer naar Lief? Plan dan je trip via 9292.nl.', 'Are you coming with public transport? Plan your trip to 9292.nl.'),
(18, 'shuttle', 3, 'Shuttlebus', 'Shuttle'),
(19, 'shuttle_text', 4, 'Vanaf Utrecht Centraal kun je onze gratis shuttlebus richting het festivalterrein pakken. Je vindt deze bus op het centraal station aan de Mineurslaan. Volg de witte bordjes met zwarte pijlen én \' ❤️U Festival\'. \r\n\r\nDe bus rijdt tussen 12:00 uur & 19:00 uur richting het festival en vanaf 21:00 uur kun je weer instappen om richting het station te gaan.', 'From Utrecht Central you can catch our free shuttle towards the festival terrain. You can find these at the Mineurslaan. Follow the white signs with the black arrows AND \' ❤️U Festival\'.  '),
(20, 'taxi', 3, 'Taxi + Kiss & Ride', 'Taxi'),
(21, 'taxi_text', 4, 'Navigeer naar Strijkviertel, De Meern (Utrecht). Volg de borden \"Kiss & Ride ❤️U Festival\", zodra je in de buurt bent van het festivalterrein.', 'Navigate to Strijkviertel, De Meern (Utrect). Follow the signs \"Kiss & Ride ❤️U Festival\", as soons as you near the festival terrain.'),
(22, 'lockers', 2, 'lockers', 'lockers'),
(23, 'lockers_text', 4, 'Op het festivalterrein zijn kluisjes aanwezig waar je je spullen veilig kunt opbergen!\r\n\r\nHier passen 3 à 4 jassen in. Goed om te weten: je kunt je kluisje gedurende de hele dag openen en sluiten zo vaak je wilt.\r\n\r\nHet is niet mogelijk om online een kluisje te reserveren.', 'At the festival terrain lockers are available to store your belongings safely!\r\n\r\nThe lockers can store about 3 to 4 coats. Good to know: During the day you can open or close it as many times as you want.\r\n\r\nIt is not possible to reserve a locker.'),
(24, 'faq', 2, 'FAQ', 'FAQ'),
(25, 'faq_ask_1', 3, 'Ik gebruik medicatie. Wat nu?', 'I need medicine. What now?'),
(26, 'faq_answer_1', 4, 'Het is toegestaan om medicijnen mee te nemen in een dosis die je maximaal nodig hebt op 1 dag. Een doktersverklaring/medicatiepaspoort is noodzakelijk.\r\nDe beveiliging zal jouw documentatie beoordelen en de medicijnen controleren. Het kan zijn dat de EHBO jouw medicijnen (bijvoorbeeld als deze gevaarlijk zijn i.c.m. alcohol) in bewaring neemt en je deze enkel kan innemen bij de EHBO. ', 'It is allowed to take a days dose of medicine with you. A doctors note/medicalpasspoort is necessary.\r\nSecurity will asses your documentation and medication. It is possible that EHBO takes the medicine into temporary custody, for safety reasons.  '),
(27, 'faq_ask_2', 3, 'Mag ik het festivalterrein tussentijds verlaten?', 'Can I leave the festival temporarily?'),
(28, 'faq_answer_2', 4, 'Nee, helaas is dat niet mogelijk. Om de veiligheid van alle bezoekers te kunnen waarborgen, kunnen we het niet toestaan dat het festivalterrein tussentijds verlaten wordt. Wij hebben namelijk geen zicht op hetgeen wat een bezoeker buiten het festivalterrein doet en ik welke staat deze het terrein weer betreedt. Hier kunnen dan ook geen uitzonderingen voor gemaakt worden. Wij hebben genoeg loungeplekken, foodstands & barren om het een hele dag uit te kunnen houden.', 'No, that isn\'t possible. To guarantee the safety of all our visitors, we can allow that. We don\'t know what you\'re doing or in what state you\'ll return. No exemptions. We have enough lounges, foodstands & bars to withstand a whole day'),
(29, 'faq_ask_3', 3, 'Zijn er lockers?', 'Are there lockers?'),
(30, 'faq_answer_3', 4, 'Yes, deze zijn er! Op het terrein kun je medium & grote lockers huren.', 'Yes, there are? You can rent medium and large lockers on the terrain.'),
(31, 'golden_glu', 3, 'Golden-GLU', 'Golden-Glu'),
(32, 'golden_glu_text', 4, 'Studenten van het GLU hebben tijdens het festival speciale privileges en zijn herkenbaar aan een gouden armbandje.\r\n\r\nMet dit gouden armbandje kunnen ze tijdens het festival gebruik maken van de gouden toiletten en met goud gemarkeerde bestelpunten aan de bars zonder in een rij te hoeven staan.', 'Students of GLU have special privileges during the festival and are recognisable by their golden wristbands.\r\n\r\nWith this golden wristband they can use the golden toilets and the gold marked order point at bars without standing in lines');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `text_combos`
--

CREATE TABLE `text_combos` (
  `id` int(11) NOT NULL,
  `container_id` int(11) NOT NULL,
  `child_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Gegevens worden geëxporteerd voor tabel `text_combos`
--

INSERT INTO `text_combos` (`id`, `container_id`, `child_id`) VALUES
(1, 3, 4),
(2, 3, 11),
(3, 3, 22),
(4, 3, 24),
(5, 3, 31),
(6, 4, 5),
(7, 4, 6),
(8, 6, 7),
(9, 6, 8),
(10, 4, 9),
(11, 9, 10),
(12, 11, 12),
(13, 12, 13),
(14, 11, 14),
(15, 14, 15),
(16, 11, 16),
(17, 16, 17),
(18, 11, 18),
(19, 18, 19),
(20, 11, 20),
(21, 11, 21),
(22, 22, 23),
(23, 20, 21),
(24, 22, 23),
(25, 24, 25),
(26, 25, 26),
(27, 24, 27),
(28, 27, 28),
(30, 24, 29),
(31, 29, 30),
(32, 31, 32);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `text_types`
--

CREATE TABLE `text_types` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Gegevens worden geëxporteerd voor tabel `text_types`
--

INSERT INTO `text_types` (`id`, `name`) VALUES
(1, 'pagina_titel'),
(2, 'titel'),
(3, 'koptekst'),
(4, 'tekst');

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `acts`
--
ALTER TABLE `acts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `extra_info` (`extra_info`);

--
-- Indexen voor tabel `acts_extra`
--
ALTER TABLE `acts_extra`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `text`
--
ALTER TABLE `text`
  ADD PRIMARY KEY (`id`),
  ADD KEY `type` (`type`);

--
-- Indexen voor tabel `text_combos`
--
ALTER TABLE `text_combos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `container_id` (`container_id`),
  ADD KEY `child_id` (`child_id`);

--
-- Indexen voor tabel `text_types`
--
ALTER TABLE `text_types`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `acts`
--
ALTER TABLE `acts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT voor een tabel `acts_extra`
--
ALTER TABLE `acts_extra`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT voor een tabel `text`
--
ALTER TABLE `text`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT voor een tabel `text_combos`
--
ALTER TABLE `text_combos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT voor een tabel `text_types`
--
ALTER TABLE `text_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Beperkingen voor geëxporteerde tabellen
--

--
-- Beperkingen voor tabel `acts`
--
ALTER TABLE `acts`
  ADD CONSTRAINT `acts_ibfk_1` FOREIGN KEY (`extra_info`) REFERENCES `acts_extra` (`id`);

--
-- Beperkingen voor tabel `text`
--
ALTER TABLE `text`
  ADD CONSTRAINT `text_ibfk_1` FOREIGN KEY (`type`) REFERENCES `text_types` (`id`);

--
-- Beperkingen voor tabel `text_combos`
--
ALTER TABLE `text_combos`
  ADD CONSTRAINT `text_combos_ibfk_1` FOREIGN KEY (`container_id`) REFERENCES `text` (`id`),
  ADD CONSTRAINT `text_combos_ibfk_2` FOREIGN KEY (`child_id`) REFERENCES `text` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
